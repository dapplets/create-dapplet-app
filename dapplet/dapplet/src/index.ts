import {} from '@dapplets/dapplet-extension'
import EXAMPLE_IMG from './icons/example.png'
import pkg from '../dapplet.json'

@Injectable
export default class Dapplet {
  @Inject(Object.keys(pkg.dependencies)[0])
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
                console.log('this._globalContext', this._globalContext)
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
