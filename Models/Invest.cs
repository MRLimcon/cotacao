using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace cotacao.Models
{
    public class Invest
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int InvestId { get; set; }

        public DateTime Date { get; set; }

        public double Amount { get; set; }

        public string Coin { get; set; }
    }
}
