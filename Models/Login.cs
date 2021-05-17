using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace cotacao.Models
{
    public class Login
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string UserName { get; set; }

        public string Password { get; set; }
    }
}
