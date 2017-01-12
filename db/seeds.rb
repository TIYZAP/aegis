# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
request = Typhoeus::Request.get(
  'https://api.meetup.com/find/groups?',
  method: :get,
  params: {
    :'photo-host' => 'public',
    page: 20,
    sig_id: 199727819,
    category: 34,
    sig: '5161f91e824504f8609ee47af53bfefb8fddb8a3'
    }
  )
seed = JSON.parse(request.body)

seed.each do |meet|
  puts meet.inspect
  Meetup.create!(
  name: meet['name'],
  link: meet['link'],
  description: meet['description'],
  city: meet['city'],
  state: meet['state'],
  meetup_id: meet['id'],
  members: meet['members']
  )
end
