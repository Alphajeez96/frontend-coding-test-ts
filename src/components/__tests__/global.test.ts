// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { getImageUrl, capitalizeText } from '../../utils'

describe('Global Utility Functions', () => {
  describe('getImageUrl', () => {
    it('should return a valid image URL', () => {
      const imagePath = 'pikachu.png'
      const expectedUrl = new URL(
        `../../assets/pokemon/${imagePath}`,
        import.meta.url,
      ).href

      const result: string = getImageUrl(imagePath)

      expect(result).toBe(expectedUrl)
    })
  })

  describe('capitalizeText', () => {
    it('should capitalize text', () => {
      const inputText = 'hello world'
      const expectedOutput = 'Hello world'

      const result: string = capitalizeText(inputText)

      expect(result).toBe(expectedOutput)
    })

    it('should return an empty string if input is empty', () => {
      const inputText = ''

      const result: string = capitalizeText(inputText)

      expect(result).toBe('')
    })
  })
})
