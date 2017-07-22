using System.Data.Entity;
using System.Web.Http;
using System.Web.OData.Batch;
using System.Web.OData.Builder;
using System.Web.OData.Extensions;
using Microsoft.OData.Edm;
using Microsoft.Owin;
using MvcAngular.Models;
using Owin;

[assembly: OwinStartupAttribute(typeof(MvcAngular.Startup))]
namespace MvcAngular
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
            Database.SetInitializer<NORTHWNDEntities>(null);

            //var config = GlobalConfiguration.Configuration;
            //config.EnableDependencyInjection();
            //config.MapODataServiceRoute("odata", "api", GetEdmModel(), new DefaultODataBatchHandler(GlobalConfiguration.DefaultServer));
            //config.Count().Filter().OrderBy().Expand().Select().MaxTop(10);
        }
        //private static IEdmModel GetEdmModel()
        //{
        //    var builder = new ODataConventionModelBuilder();
        //    //builder.EntitySet<TicketModel>("Ticket");
        //    var edmModel = builder.GetEdmModel();
        //    return edmModel;
        //}
    }
}
