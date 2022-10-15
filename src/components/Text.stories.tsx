import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Loren ipsum',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    }
  }
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {
  args: {

  }
}

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm',
  }
}

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg'
  }
}

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    size: 'lg',
    asChild: true,
    children: (
      <p>Testando</p>
    ),
  },
  argTypes: {
    children: {
      table: { disable: true },
    },
    asChild: {
      table: { disable: true },
    }
  }
}
