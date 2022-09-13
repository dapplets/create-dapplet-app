import { } from '@dapplets/dapplet-extension';
import { Api } from './api';
import { IBridge, IStorage } from './types';


@Injectable
export default class TwitterFeature {
  // Here you need to specify the name of the adapter to use, and also add it to the dapplet manifest in "dependencies" and "context IDs"
  // Learn more - https://docs.dapplets.org/docs/manifest
  @Inject('')
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


