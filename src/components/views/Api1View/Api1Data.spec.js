// Api1Data.spec.js
import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import Api1Data from './Api1Data.vue'

// Mock the fetch function globally
global.fetch = vi.fn()

describe('Api1Data.vue', () => {
  it('crida fetch quan al onMounted', async () => {
    // Mock the fetch response
    fetch.mockResolvedValueOnce({
      ok: true,
      json: vi.fn().mockResolvedValueOnce([]), // Return an empty array for comments
    })

    // Mount the component
    mount(Api1Data)

    // Check if fetch was called
    expect(fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/comments',
    )
  })
})
