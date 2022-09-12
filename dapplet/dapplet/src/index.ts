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
// ! overlay
  // private overlay = Core.overlay<IBridge>({ name: 'overlay', title: '' })
  //   .useState(this.state)
  //   .declare(this.api);
// ! overlay
  
    
  async activate(): Promise<void> {
    // ! server
    // const server = Core.connect<IStorage>
    // ! server

    // ! overlay
    // await this.api.initializeCurrentAccount();
    // Core.onAction(() => {
    //   this.overlay.open()
    //   this.api.initializeCurrentAccount();
    // });
    // ! overlay
  }
}

// @Injectable
// export default class GoogleFeature {

//   // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
//   @Inject('example-google-adapter.dapplet-base.eth') public adapter: any;
// }
