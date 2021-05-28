using Microsoft.EntityFrameworkCore;
using cotacao.Models;

namespace cotacao.Context {
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Invest> Invest { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) {}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Todo> Todo { get; set; }
    }
}
