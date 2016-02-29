ENV["RACK_ENV"] = "test"

require "minitest/autorun"
require "rack/test"

require_relative "../cms"

class CmsTest < Minitest::Test
  include Rack::Test::Methods

  def app
    Sinatra::Application
  end

  def test_index
    get "/"
    assert_equal 200, last_response.status
    assert_equal "text/html;charset=utf-8", last_response["Content-Type"]
    assert last_response.body.include?('about.txt')
    assert last_response.body.include?('changes.txt')
    assert last_response.body.include?('history.txt')
  end

  def test_changes
    get "/changes.txt"
    assert_equal 200, last_response.status
    assert last_response.body.include?('something')
  end
end