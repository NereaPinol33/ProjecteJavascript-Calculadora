// Api2Data.spec.js
import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import Api2Data from './Api2Data.vue' // Adjust the import to your actual file path
import axios from 'axios'

// Mock the axios module
vi.mock('axios')

describe('Api2Data.vue', () => {
  it('crida axios.get quan al onMounted', async () => {
    // Mock the Axios response
    axios.get.mockResolvedValueOnce({ data: { users: [] } }) // Mock response with an empty users array

    // Mount the component
    const wrapper = mount(Api2Data)

    // Check if axios.get was called with the correct URL
    expect(axios.get).toHaveBeenCalledWith('https://dummyjson.com/users')
  })
})
