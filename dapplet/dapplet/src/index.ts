import {} from '@dapplets/dapplet-extension'
import EXAMPLE_IMG from './icons/example.png'
@Injectable
export default class Dapplet {
  /** 
  Here you need to specify the name of the adapter to use, and also add it to the dapplet manifest in "dependencies" and "context IDs"
  Learn more - https://docs.dapplets.org/docs/manifest
   */
  @Inject('twitter-config.dapplet-base.eth')
  public adapter
  private _globalContext = {}

  /**
   * Uncomment this to use overlay
   */

  // private overlay = Core.overlay({ name: 'overlay', title: '' })

  async activate(): Promise<void> {
    const { button } = this.adapter.exports
    this.adapter.attachConfig({
      GLOBAL: (global) => {
        this._globalContext = global
      },
      PROFILE: (ctx) => {
        return [
          button({
            initial: 'DEFAULT',
            DEFAULT: {
              label: 'my button',
              img: EXAMPLE_IMG,
              exec: async (_, me) => {
                console.log('ctx', ctx)
                console.log('me', me)
              },
            },
          }),
        ]
      },
    })
    // Core.onAction(async() => {
    //   this.overlay.open()

    // })
  }
}
