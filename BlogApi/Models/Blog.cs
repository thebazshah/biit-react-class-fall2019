using System;

namespace BlogApi.Models
{
  public class Blog
  {
    public Guid Id { get; set; }
    public string Text { get; set; }
    public long Timestamp { get; set; }
    public Guid UserId { get; set; }
    public User User { get; set; }
  }
}
