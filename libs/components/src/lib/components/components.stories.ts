import { ComponentsComponent } from './components.component';
import { Meta, StoryObj } from '@storybook/angular';

const meta: Meta<ComponentsComponent> = {
  title: 'Task',
  component: ComponentsComponent,
  render: () => ({
    template: `<f-components ></f-components>`,
  }),
};

export default meta;
type Story = StoryObj<ComponentsComponent>;

export const Default: Story = {};
