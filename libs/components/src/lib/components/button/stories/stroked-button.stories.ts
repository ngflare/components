import { argsToTemplate, Meta, StoryObj } from '@storybook/angular';
import { FlareStrokedButtonDirective } from '../stroked-button.directive';

type ButtonPropsAndCustomArgs = FlareStrokedButtonDirective & { text: string };

const meta: Meta<ButtonPropsAndCustomArgs> = {
  title: 'Button',
  component: FlareStrokedButtonDirective,
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
    template: `<button f-stroked-button type="button" ${argsToTemplate(args)}>${text}</button>`,
  }),
};

export default meta;
type Story = StoryObj<ButtonPropsAndCustomArgs>;

export const Stroked: Story = {
  args: {
    size: undefined,
    circular: false,
    text: 'Submit',
  },
};
