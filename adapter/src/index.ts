import { IFeature } from '@dapplets/dapplet-extension';
import { WbButton, IWbButtonProps } from './wb-button';

type ContextBuilder = {
  [propName: string]: string;
};
type Exports = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [propName: string]: any;
};

@Injectable
export default class Adapter {
  public exports = (): Exports => ({
    button: this.adapter.createWidgetFactory(WbButton),
  });

  
  public config = {
    POST: {
      containerSelector: '',
      contextSelector: '',
      insPoints: {
        POST: {
          selector: '',
          insert: '',
        },
      },
      contextBuilder: (): ContextBuilder => ({}),
    },
    QUOTE_POST: {
      containerSelector: '',
      contextSelector: '',
      insPoints: {
        QUOTE_POST: {
          selector: '',
          insert: '',
        },
      },
      contextBuilder: (): ContextBuilder => ({}),
    },
    PROFILE: {
      containerSelector: '',
      contextSelector: '',
      insPoints: {
        PROFILE: {
          selector: '',
          insert: '',
        },
      },
      contextBuilder: (): ContextBuilder => ({}),
    },

  };


  constructor(
    @Inject('dynamic-adapter.dapplet-base.eth') readonly adapter: any,
  ) {
    this.adapter.configure(this.config);
  }

  public attachConfig(feature: IFeature): void {
    this.adapter.attachConfig(feature);
  }

  public detachConfig(feature: IFeature): void {
    this.adapter.detachConfig(feature);
  }
}