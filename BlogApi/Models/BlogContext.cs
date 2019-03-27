using System;
using Microsoft.EntityFrameworkCore;
using BlogApi.Models;

namespace BlogApi.Models
{
  public class BlogContext : DbContext
  {
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      optionsBuilder.UseSqlite("Data Source=blogging.db");
    }

    public DbSet<Blog> Blogs { get; set; }
    public DbSet<User> Users { get; set; }
  }
}
