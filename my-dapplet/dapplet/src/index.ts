import {} from '@dapplets/dapplet-extension'
/**
 * Uncomment this to use overlay
 */
// import { Api } from './api'
// import { IBridge, IStorage } from './types'

@Injectable
export default class Dapplet {
  /** 
  Here you need to specify the name of the adapter to use, and also add it to the dapplet manifest in "dependencies" and "context IDs"
  Learn more - https://docs.dapplets.org/docs/manifest
   */
  @Inject('my-adapter')
  public adapter
  private _globalContext = {}
  private _$
  private _initWidgetFunctions: { [name: string]: () => Promise<void> } = {}
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
  executeInitWidgetFunctions = (): Promise<void[]> =>
    Promise.all(Object.values(this._initWidgetFunctions).map((fn) => fn()))

  async activate(): Promise<void> {
    await this.pasteWidgets()
    // Core.onAction(async() => {
    //   this.overlay.open()
    //   this.api.initializeCurrentAccount()
    // })
  }

  async pasteWidgets(): Promise<void> {
    const { button } = this.adapter.exports
    const { $ } = this.adapter.attachConfig({
      GLOBAL: (global) => {
        Object.assign(this._globalContext, global)
      },
      BODY: (ctx) => {
        return [
          button({
            initial: 'DEFAULT',
            DEFAULT: {
              label: 'my button',
              exec: async (_, me) => {
                console.log('ctx', ctx)
                console.log('me', me)
              },
            },
          }),
        ]
      },
    })
    this._$ = $
  }
}
