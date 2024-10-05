import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './Button.vue'

const meta = {
  title: 'Features/Button',
  component: Button,
  argTypes: {
    variant: { control: 'text' },
    content: { control: 'text' },
  },
  args: { 
    variant: 'default',
    content: 'Click me',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">{{ args.content }}</Button>',
  }),
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Secondary: Story = {
  args: { variant: 'secondary' },
}
