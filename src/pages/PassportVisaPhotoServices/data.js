import photoExample1 from '../../assets/photo-examples-1.png'
import photoExample2 from '../../assets/photo-examples-2.png'
import photoExample3 from '../../assets/photo-examples-3.png'
import photoExample4 from '../../assets/photo-examples-4.png'
import photoExample5 from '../../assets/photo-examples-5.png'

const sharedExampleImages = [
  photoExample1,
  photoExample2,
  photoExample3,
  photoExample4,
  photoExample5,
]

const sizePositionImages = [
  photoExample3,
  photoExample5,
  photoExample1,
  photoExample4,
  photoExample2,
]

const demoDescriptions = {
  'shadows-lighting': [
    { status: 'incorrect', description: 'Too much shadow across the left side of the face and neck.' },
    { status: 'correct', description: 'Even front lighting with natural skin tone and no hard shadows.' },
    { status: 'incorrect', description: 'Background shadow is visible, which can lead to rejection.' },
    { status: 'correct', description: 'Balanced exposure and clean white background are both correct.' },
    { status: 'incorrect', description: 'Harsh side light creates glare and uneven contrast on the face.' },
  ],
  'size-position': [
    { status: 'incorrect', description: 'Head is too small in the frame and does not meet sizing rules.' },
    { status: 'correct', description: 'Head height and eye line are properly centered for passport specs.' },
    { status: 'incorrect', description: 'The face is shifted too far right and not aligned to center.' },
    { status: 'correct', description: 'Proper crop leaves the required space above the head.' },
    { status: 'incorrect', description: 'Photo is over-cropped; chin is too close to the bottom edge.' },
  ],
}

function buildExamples(groupId, topicLabel, images = sharedExampleImages) {
  const descriptions = demoDescriptions[groupId]
  return images.map((image, index) => {
    const fallbackCorrect = index % 2 === 1
    const row = descriptions?.[index]
    return {
      id: `${groupId}-${index + 1}`,
      image,
      thumbnailAlt: `${topicLabel} example ${index + 1}`,
      status: row?.status || (fallbackCorrect ? 'correct' : 'incorrect'),
      description:
        row?.description ||
        (fallbackCorrect
          ? `Good ${topicLabel.toLowerCase()} sample for review.`
          : `Incorrect ${topicLabel.toLowerCase()} sample for review.`),
    }
  })
}

export const photoExampleGroups = [
  {
    id: 'shadows-lighting',
    label: 'Shadows and Lighting',
    examples: buildExamples('shadows-lighting', 'Shadows and Lighting'),
  },
  {
    id: 'size-position',
    label: 'Size and Position',
    examples: buildExamples('size-position', 'Size and Position', sizePositionImages),
  },
  {
    id: 'resolution-print-quality',
    label: 'Resolution, Print Size, and Quality',
    examples: buildExamples('resolution-print-quality', 'Resolution, Print Size, and Quality'),
  },
  { id: 'digital-changes', label: 'Digital Changes', examples: buildExamples('digital-changes', 'Digital Changes') },
  { id: 'pose-expression', label: 'Pose and Expression', examples: buildExamples('pose-expression', 'Pose and Expression') },
  {
    id: 'attire-hats-glasses',
    label: 'Attire, Hats, and Glasses',
    examples: buildExamples('attire-hats-glasses', 'Attire, Hats, and Glasses'),
  },
  { id: 'background', label: 'Background', examples: buildExamples('background', 'Background') },
  { id: 'children', label: 'Children', examples: buildExamples('children', 'Children') },
]
