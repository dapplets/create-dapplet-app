import { } from '@dapplets/dapplet-extension';
import EXAMPLE_IMG from './icons/example.png'
/**
 * Uncomment this to use overlay
 */
// import { Api } from './api';
// import { IBridge, IStorage } from './types';

@Injectable
export default class Dapplet {

  /** 
  Here you need to specify the name of the adapter to use, and also add it to the dapplet manifest in "dependencies" and "context IDs"
  Learn more - https://docs.dapplets.org/docs/manifest
   */
  @Inject('twitter-adapter.dapplet-base.eth')
  public adapter: any;

  /**
    * Uncomment this to use overlay
    */
  // private state = Core.state<IStorage>({
  //   userAccount: '',
  // });
  // private api = new Api({
  //   state: this.state
  // });

  // private overlay = Core.overlay<IBridge>({ name: 'overlay', title: '' })
  //   .useState(this.state)
  //   .declare(this.api);

  async activate(): Promise<void> {

    /**
     * Uncomment this to use overlay
     */
    //  await this.api.initializeCurrentAccount();
    //  Core.onAction(() => {
    //    this.overlay.open()
    //    this.api.initializeCurrentAccount();
    //  });
    const { button } = this.adapter.exports;
    this.adapter.attachConfig({
      POST: (ctx: any) =>
        button({
          initial: 'DEFAULT',
          DEFAULT: {
            img: EXAMPLE_IMG,
            label:'my button',
            exec: async (_, me) => {
              console.log('ctx', ctx);
              console.log('me', me);
            },
          },
        }),
    });
  }
}


