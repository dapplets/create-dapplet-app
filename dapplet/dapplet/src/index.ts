import { } from '@dapplets/dapplet-extension';
import { Api } from './api';
import { IBridge, IStorage } from './types';


@Injectable
export default class TwitterFeature {
  @Inject('twitter-adapter.dapplet-base.eth')
  public adapter: any;

  private state = Core.state<IStorage>({
    userAccount: '',
  });

  private api = new Api({
    state: this.state,
  });

  private overlay = Core.overlay<IBridge>({ name: 'overlay', title: 'example-dapplet-template' })
    .useState(this.state)
    .declare(this.api);

    
  async activate(): Promise<void> {
    await this.api.initializeCurrentAccount();
      Core.onAction(() => {
      this.overlay.open()
      this.api.initializeCurrentAccount();
    });
    this.adapter.attachConfig({})
  }
}
