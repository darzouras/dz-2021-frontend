import textHeading from '../components/textHeading.vue'

export default {
  title: 'Components/Typography/Headings',
  component: textHeading,
  argTypes: {
    level: { control: { type: 'select', options: [1, 2, 3, 4, 5] } },
    display: { control: { type: 'select', options: [ 'title', 'heading', 'subheading', 'kicker' ] } }
  }
}

const Template = (arg, { argTypes}) => ({
  components: { textHeading },
  props: Object.keys(argTypes),
  template: '<textHeading v-bind="$props" />'
});

export const Title = Template.bind({});
Title.args = {
  text: 'This is a title',
  level: 2,
  display: 'title'
}

export const Heading = Template.bind({});
Heading.args = {
  text: 'This is a heading',
  level: 2,
  display: 'heading'
}

export const Subheading = Template.bind({});
Subheading.args = {
  text: 'This is a subheading',
  level: 3,
  display: 'subheading'
}

export const Kicker = Template.bind({});
Kicker.args = {
  text: 'This is a kicker',
  level: 3,
  display: 'kicker'
}
