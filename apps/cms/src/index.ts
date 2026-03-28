// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    const extensionService = strapi.plugin("graphql").service("extension");

    const allowedModels = [
      "api::banner.banner",
      "plugin::users-permissions.user",
      "plugin::users-permissions.auth",
    ];

    const allModels = Object.keys(strapi.contentTypes);

    allModels.forEach((modelUID) => {
      if (!allowedModels.includes(modelUID)) {
        extensionService.shadowCRUD(modelUID).disableQueries();
        extensionService.shadowCRUD(modelUID).disableMutations();
      }
    });
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/* { strapi }: { strapi: Core.Strapi } */) {},
};
