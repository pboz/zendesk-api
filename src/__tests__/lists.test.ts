import { zendeskAPI } from './helpers'

test('get a page of users', async () => {
  const res = await zendeskAPI<Zendesk.PaginatedResults.Users>('/users')
  expect(res.body.users.length).toBeGreaterThan(0)
})

test('get a page of tickets', async () => {
  const res = await zendeskAPI<Zendesk.PaginatedResults.Tickets>('/tickets')
  expect(res.body.tickets.length).toBeGreaterThan(0)
})