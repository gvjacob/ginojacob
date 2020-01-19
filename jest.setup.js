import '@testing-library/jest-dom/extend-expect'

beforeAll(() => {
  global.___loader = {
    enqueue: jest.fn(),
  }
})
