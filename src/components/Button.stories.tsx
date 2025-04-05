import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'Button',
    variant: 'default',
    size: 'medium',
  },
};

export const Primary: Story = {
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    variant: 'secondary',
    size: 'medium',
  },
};

export const Tertiary: Story = {
  args: {
    label: 'Button',
    variant: 'tertiary',
    size: 'medium',
  },
};

export const Link: Story = {
  args: {
    label: 'Button',
    variant: 'link',
    size: 'medium',
  },
};

