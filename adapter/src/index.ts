import { IFeature } from '@dapplets/dapplet-extension'
import { Button } from './button'

type ContextBuilder = {
  [propName: string]: string
}
type Exports = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [propName: string]: any
}

@Injectable
export default class Adapter {
  public exports = (): Exports => ({
    button: this.adapter.createWidgetFactory(Button),
  })

  public config = {
    POST: {
      containerSelector: 'body',
      contextSelector: '',
      insPoints: {
        POST: {
          selector: '',
          insert: 'inside',
        },
      },
      contextBuilder: (contextElement: HTMLElement): ContextBuilder => ({
        id: contextElement.classList.toString(),
      }),
    },
  }
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  constructor(@Inject('dynamic-adapter.dapplet-base.eth') readonly adapter: any) {
    this.adapter.configure(this.config)
  }

  public attachConfig(feature: IFeature): void {
    this.adapter.attachConfig(feature)
  }

  public detachConfig(feature: IFeature): void {
    this.adapter.detachConfig(feature)
  }
}
