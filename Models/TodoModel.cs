using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace cotacao.Models
{   
    [Table ("Todo")]
    public class Todo 
    {
        [Key]
        public int Id { get; set; }

        public string Text { get; set; }

        public bool Complete { get; set; }


    }
}