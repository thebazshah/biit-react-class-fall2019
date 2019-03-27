using System;
using System.Collections.Generic;

namespace BlogApi.Models
{
  public class User
  {
    public Guid Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Username { get; set; }
    public string Password { get; set; }
    public string Token { get; set; }
    public ICollection<Blog> Blogs { get; set; }
  }
}
