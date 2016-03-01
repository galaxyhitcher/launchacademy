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
    assert last_response.body.include?('about.md')
    assert last_response.body.include?('changes.txt')
    assert last_response.body.include?('history.txt')
  end

  def test_changes
    get "/changes.txt"
    assert_equal 200, last_response.status
    assert last_response.body.include?('something')
  end

  def test_document_not_found
    get "/notafile.ext"
    assert_equal 302, last_response.status
    get last_response["Location"]

    assert_equal 200, last_response.status
    assert_includes last_response.body, "notafile.ext does not exist"
  end

  def test_viewing_markdown_document
    get "/about.md"

    assert_equal 200, last_response.status
    assert_equal "text/plain", last_response["Content-Type"]
    assert_includes last_response.body, "<h1>Check this out!</h1>"
  end
end