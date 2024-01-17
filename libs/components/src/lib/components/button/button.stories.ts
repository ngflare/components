import { argsToTemplate, Meta, StoryObj } from '@storybook/angular';
import { FlareButtonDirective } from './button.directive';

const meta: Meta<FlareButtonDirective> = {
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
  },
  render: (args) => ({
    props: args,
    template: `<button f-button type="button" ${argsToTemplate(args)}>Submit</button>`,
  }),
};

export default meta;
type Story = StoryObj<FlareButtonDirective>;

export const Standard: Story = {
  args: {
    size: undefined,
  },
};
