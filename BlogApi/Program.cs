using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using BlogApi.Models;

namespace BlogApi
{
  public class Program
  {
    public static void Main(string[] args)
    {
      // using (var db = new BlogContext())
      // {
      //   var user1 = new User { Id = new Guid("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), FirstName = "Test1", LastName = "User1", Username = "test1", Password = "test1" };
      //   var user2 = new User { Id = new Guid("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"), FirstName = "Test2", LastName = "User2", Username = "test2", Password = "test2" };
      //   db.Users.Add(user1);
      //   db.Users.Add(user2);

      //   var blog1 = new Blog { Id = new Guid("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), Text = "some text 1", User = user1, Timestamp = DateTime.Now };
      //   var blog2 = new Blog { Id = new Guid("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"), Text = "some text 2", User = user1, Timestamp = DateTime.Now };
      //   var blog3 = new Blog { Id = new Guid("cccccccccccccccccccccccccccccccc"), Text = "some text 3", User = user2, Timestamp = DateTime.Now };
      //   var blog4 = new Blog { Id = new Guid("dddddddddddddddddddddddddddddddd"), Text = "some text 4", User = user1, Timestamp = DateTime.Now };
      //   var blog5 = new Blog { Id = new Guid("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"), Text = "some text 5", User = user2, Timestamp = DateTime.Now };
      //   var blog6 = new Blog { Id = new Guid("ffffffffffffffffffffffffffffffff"), Text = "some text 6", User = user1, Timestamp = DateTime.Now };

      //   db.Blogs.Add(blog1);
      //   db.Blogs.Add(blog2);
      //   db.Blogs.Add(blog3);
      //   db.Blogs.Add(blog4);
      //   db.Blogs.Add(blog5);
      //   db.Blogs.Add(blog6);

      //   var count = db.SaveChanges();
      //   Console.WriteLine("{0} records written to database.", count);
      // }
      CreateWebHostBuilder(args).Build().Run();
    }

    public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
        WebHost.CreateDefaultBuilder(args)
            .UseStartup<Startup>();
  }
}
