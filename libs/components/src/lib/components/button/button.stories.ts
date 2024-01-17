import { Meta, StoryObj } from '@storybook/angular';
import { FlareButtonDirective } from './button.directive';

const meta: Meta<FlareButtonDirective> = {
  title: 'Button',
  component: FlareButtonDirective,
  render: () => ({
    template: `<button f-button type="button">Submit</button>`,
  }),
};

export default meta;
type Story = StoryObj<FlareButtonDirective>;

export const Default: Story = {};
