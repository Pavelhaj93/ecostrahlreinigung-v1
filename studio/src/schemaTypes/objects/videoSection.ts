import {defineField, defineType} from 'sanity'
import {PlayIcon} from '@sanity/icons'

export const videoSection = defineType({
  name: 'videoSection',
  title: 'Video Section',
  type: 'object',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'videoUrl',
      title: 'Video URL (External)',
      type: 'url',
      description:
        'YouTube, Vimeo, or direct video file URL. Leave empty if uploading a file below.',
    }),
    defineField({
      name: 'videoFile',
      title: 'Video File (Upload)',
      type: 'file',
      description: 'Upload a video file. This will be used if no URL is provided above.',
      options: {
        accept: 'video/*',
      },
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main heading displayed over the video',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Text displayed above the title',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Description text displayed below the title',
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'Text for the call-to-action button',
    }),
    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
      description: 'URL or anchor link (e.g., #leistungen) for the button',
    }),
    defineField({
      name: 'overlayContent',
      title: 'Show Content Overlay',
      type: 'boolean',
      description: 'Display text content over the video with a dark overlay',
      initialValue: true,
    }),
    defineField({
      name: 'autoplay',
      title: 'Autoplay',
      type: 'boolean',
      description: 'Start playing the video automatically',
      initialValue: true,
    }),
    defineField({
      name: 'muted',
      title: 'Muted',
      type: 'boolean',
      description: 'Start the video muted (required for autoplay in most browsers)',
      initialValue: true,
    }),
    defineField({
      name: 'loop',
      title: 'Loop',
      type: 'boolean',
      description: 'Loop the video continuously',
      initialValue: true,
    }),
    defineField({
      name: 'controls',
      title: 'Show Controls',
      type: 'boolean',
      description: 'Show video playback controls',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      videoUrl: 'videoUrl',
      videoFile: 'videoFile',
    },
    prepare({title, subtitle, videoUrl, videoFile}) {
      const hasVideo = videoUrl || videoFile
      return {
        title: title || 'Video Section',
        subtitle: hasVideo ? subtitle || 'Video configured' : 'No video source',
        media: PlayIcon,
      }
    },
  },
})
