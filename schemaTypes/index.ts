import { author } from './Author'
import { blogCategory } from './blogCategory'
import {blogPost} from './blogpost'
import {category} from './category'
import {collection} from './collection'
import {heroBanner} from './heroBanner'
import {product} from './product'
import {testimonial} from './testimonial'

export const schemaTypes = [product, category, collection, heroBanner, testimonial, blogPost,   author,
  blogCategory,]
