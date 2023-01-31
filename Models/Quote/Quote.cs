using System.ComponentModel.DataAnnotations;

namespace TestWebsite.Models.Quote
{
    public class Quote
    {
        [Display(Name = "Contact Title")]
        public Enums.GeneralEnum.Title ContactTitle { get; set; }


        [Display(Name = "Contact Name")]
        public string ContactName { get; set; }

        [Display(Name = "Email Address")]
        public string EmailAddress { get; set; }

        [Display(Name = "Total Size (m2)")]
        public double TotalSize { get; set; }

        [Display(Name = "Total Rebuild Cost (£)")]
        public decimal TotalRebuildCost { get; set; }

        [Display(Name = "Roof Size")]
        public string RoofSize { get; set; }
    }
}
