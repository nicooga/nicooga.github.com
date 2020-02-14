import post1 from './2020_02_10_hello_world'

const REQUIRED_PROPERTIES = ['title', 'slug', 'date', 'component', 'description']

// Yeah, I know, this is horrible.
// A better solution would be using TS and implemeting a Post interface to ensure no important properties are missing.
// But right now I'm not in the mood to figure out (again) how to setup TS, and honestly,
// I don't think I am going to have a noticeable performance drop because of doing a runtime validation.
const validate = post => {
  REQUIRED_PROPERTIES.forEach(prop => {
    if (post[prop] === undefined) {
      throw `Missing post property "${prop}"` // eslint-disable no-throw-literal
    }
  })
}

const posts = [
  post1
]

posts.forEach(validate)

export default posts
