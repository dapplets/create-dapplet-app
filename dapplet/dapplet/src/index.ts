import { } from '@dapplets/dapplet-extension';

// ! overlay
/** 
import { Api } from './api';
import { IBridge, IStorage } from './types';
*/
// ! overlay


@Injectable

/** 
Here you need to specify the class of the adapter to use
Learn more - https://docs.dapplets.org/docs/new-site-adapter#add-a-widget-result-to-the-adapter-with-one-context-insertion-point
*/
export default class {

  /** 
  Here you need to specify the name of the adapter to use, and also add it to the dapplet manifest in "dependencies" and "context IDs"
  Learn more - https://docs.dapplets.org/docs/manifest
   */
  @Inject('')
  public adapter: any;

  // ! overlay
  /** Uncomment this to use overlay
     private state = Core.state<IStorage>({
    userAccount: '',
  });
     private api = new Api({
     state: this.state
   });
   */
  // ! overlay

  // ! overlay
  /** Uncomment this to use overlay
      private overlay = Core.overlay<IBridge>({ name: 'overlay', title: '' })
     .useState(this.state)
     .declare(this.api);
    */
  // ! overlay


  async activate(): Promise<void> {
    // ! server
    // const server = Core.connect<IStorage>
    // ! server

    // ! overlay
    /** Uncomment this to use overlay
    await this.api.initializeCurrentAccount();
   Core.onAction(() => {
     this.overlay.open()
     this.api.initializeCurrentAccount();
   });
  */
    // ! overlay
  }
}


