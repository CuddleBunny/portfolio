using System.ComponentModel.DataAnnotations;

namespace CuddleBunnyPortfolio.Models {
    public class EmailViewModel {
		[Required]
		[EmailAddress]
		public string From { get; set; }
		[Required]
		public string Subject { get; set; }
		[Required]
		public string Body { get; set; }
    }
}
