import { argsToTemplate, Meta, StoryObj } from '@storybook/angular';
import { FlareTextButtonDirective } from '../text-button.directive';

type ButtonPropsAndCustomArgs = FlareTextButtonDirective & { text: string };

const meta: Meta<ButtonPropsAndCustomArgs> = {
  title: 'Button',
  component: FlareTextButtonDirective,
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
    template: `<button f-text-button type="button" ${argsToTemplate(args)}>${text}</button>`,
  }),
};

export default meta;
type Story = StoryObj<ButtonPropsAndCustomArgs>;

export const Text: Story = {
  args: {
    size: undefined,
    circular: false,
    text: 'Submit',
  },
};
