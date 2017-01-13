# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
meets = ['Indianapolis-Downtown-Code-and-Coffee', 'agileindy', 'Girl-Develop-It-Indianapolis', 'indypy', 'Free-Code-Camp-Indy', 'Dev-Workshop-Indy', 'indyelixir', 'indyrb', 'indyjs', 'Node-indy']

meets.each do |meetup|
  request = Typhoeus::Request.get(
    "https://api.meetup.com/#{meetup}?",
    method: :get,
    params: {
      :'photo-host' => 'public',
      key: ENV['MEETUP_API_KEY'],
      format: 'json'
      }
    )
  seed = JSON.parse(request.body)
  puts seed.inspect
    Meetup.create!(
    name: seed['name'],
    link: seed['link'],
    description: seed['description'],
    city: seed['city'],
    state: seed['state'],
    meetup_id: seed['id'],
    members: seed['members'],
    )
    if seed['group_photo']
      group = Meetup.find_by(meetup_id: seed['id'])
      group.update(remote_image_url: seed['group_photo']['highres_link'])
    end
end
