import { argsToTemplate, Meta, StoryObj } from '@storybook/angular';
import { FlareButtonDirective } from '../button.directive';

type ButtonPropsAndCustomArgs = FlareButtonDirective & { text: string };

const meta: Meta<ButtonPropsAndCustomArgs> = {
  title: 'Button',
  component: FlareButtonDirective,
  argTypes: {
    size: {
      name: 'Size',
      control: {
        type: 'select',
        labels: {
          small: 'small',
          undefined: 'default',
          large: 'large',
        },
      },
      options: ['small', undefined, 'large'],
    },
    circular: {
      name: 'Circular',
      control: 'boolean',
    },
    text: {
      name: 'Text',
      control: 'text',
    },
  },
  render: ({ text, ...args }) => ({
    props: args,
    template: `<button f-button type="button" ${argsToTemplate(args)}>${text}</button>`,
  }),
};

export default meta;
type Story = StoryObj<ButtonPropsAndCustomArgs>;

export const Standard: Story = {
  args: {
    size: undefined,
    circular: false,
    text: 'Submit',
  },
};
