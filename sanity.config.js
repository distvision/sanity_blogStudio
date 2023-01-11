import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'blog',

  projectId: 'ifmqu35d',
  dataset: 'prod',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
