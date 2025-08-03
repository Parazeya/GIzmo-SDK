import { GizmoClient } from './GizmoClient.js';
import { Apps as AppsV1 } from './v1/Apps.js';
import { Attributes as AttributesV1 } from './v1/Attributes.js';
import { Export as ExportV1 } from './v1/Export.js';
import { HostComputers as HostComputersV1 } from './v1/HostComputers.js';
import { HostGroups as HostGroupsV1 } from './v1/HostGroups.js';
import { Hosts as HostsV1 } from './v1/Hosts.js';
import { Invoices as InvoicesV1 } from './v1/Invoices.js';
import { Licenses as LicensesV1 } from './v1/Licenses.js';
import { MonetaryUnit as MonetaryUnitV1 } from './v1/MonetaryUnit.js';
import { Points as PointsV1 } from './v1/Points.js';
import { Products as ProductsV1 } from './v1/Products.js';
import { Registration as RegistrationV1 } from './v1/Registration.js';
import { Reports as ReportsV1 } from './v1/Reports.js';
import { Reservations as ReservationsV1 } from './v1/Reservations.js';
import { Service as ServiceV1 } from './v1/Service.js';
import { Stats as StatsV1 } from './v1/Stats.js';
import { Stock as StockV1 } from './v1/Stock.js';
import { UserGroups as UserGroupsV1 } from './v1/UserGroups.js';
import { Users as UsersV1 } from './v1/Users.js';
import { UserSessions as UserSessionsV1 } from './v1/UserSessions.js';
import { Verifications as VerificationsV1 } from './v1/Verifications.js';
// v2
import { ApplicationCategories as ApplicationCategoriesV2 } from './v2/ApplicationCategories.js';
import { ApplicationDeployments as ApplicationDeploymentsV2 } from './v2/ApplicationDeployments.js';
import { ApplicationEnterprises as ApplicationEnterprisesV2 } from './v2/ApplicationEnterprises.js';
import { ApplicationExecutables as ApplicationExecutablesV2 } from './v2/ApplicationExecutables.js';
import { ApplicationGroups as ApplicationGroupsV2 } from './v2/ApplicationGroups.js';
import { ApplicationPersonalFiles as ApplicationPersonalFilesV2 } from './v2/ApplicationPersonalFiles.js';
import { ApplicationTasks as ApplicationTasksV2 } from './v2/ApplicationTasks.js';
import { Assets as AssetsV2 } from './v2/Assets.js';
import { AssetTypes as AssetTypesV2 } from './v2/AssetTypes.js';
import { Attributes as AttributesV2 } from './v2/Attributes.js';
import { BillingProfiles as BillingProfilesV2 } from './v2/BillingProfiles.js';
import { Devices as DevicesV2 } from './v2/Devices.js';
import { HostGroups as HostGroupsV2 } from './v2/HostGroups.js';
import { Hosts as HostsV2 } from './v2/Hosts.js';
import { Invoices as InvoicesV2 } from './v2/Invoices.js';
import { MonetaryUnits as MonetaryUnitsV2 } from './v2/MonetaryUnits.js';
import { Operators as OperatorsV2 } from './v2/Operators.js';
import { Orders as OrdersV2 } from './v2/Orders.js';
import { PaymentMethods as PaymentMethodsV2 } from './v2/PaymentMethods.js';
import { ProductGroups as ProductGroupsV2 } from './v2/ProductGroups.js';
import { Products as ProductsV2 } from './v2/Products.js';
import { Reservations as ReservationsV2 } from './v2/Reservations.js';
import { UserGroups as UserGroupsV2 } from './v2/UserGroups.js';
import { Users as UsersV2 } from './v2/Users.js';
import { Variables as VariablesV2 } from './v2/Variables.js';
import { Verifications as VerificationsV2 } from './v2/Verifications.js';

function createV1Categories(client) {
    return {
        apps: new AppsV1(client),
        attributes: new AttributesV1(client),
        export: new ExportV1(client),
        hostComputers: new HostComputersV1(client),
        hostGroups: new HostGroupsV1(client),
        hosts: new HostsV1(client),
        invoices: new InvoicesV1(client),
        licenses: new LicensesV1(client),
        monetaryUnit: new MonetaryUnitV1(client),
        points: new PointsV1(client),
        products: new ProductsV1(client),
        registration: new RegistrationV1(client),
        reports: new ReportsV1(client),
        reservations: new ReservationsV1(client),
        service: new ServiceV1(client),
        stats: new StatsV1(client),
        stock: new StockV1(client),
        userGroups: new UserGroupsV1(client),
        users: new UsersV1(client),
        userSessions: new UserSessionsV1(client),
        verifications: new VerificationsV1(client)
    };
}

function createV2Categories(client) {
    return {
        applicationCategories: new ApplicationCategoriesV2(client),
        applicationDeployments: new ApplicationDeploymentsV2(client),
        applicationEnterprises: new ApplicationEnterprisesV2(client),
        applicationExecutables: new ApplicationExecutablesV2(client),
        applicationGroups: new ApplicationGroupsV2(client),
        applicationPersonalFiles: new ApplicationPersonalFilesV2(client),
        applicationTasks: new ApplicationTasksV2(client),
        assets: new AssetsV2(client),
        assetTypes: new AssetTypesV2(client),
        attributes: new AttributesV2(client),
        billingProfiles: new BillingProfilesV2(client),
        devices: new DevicesV2(client),
        hostGroups: new HostGroupsV2(client),
        hosts: new HostsV2(client),
        invoices: new InvoicesV2(client),
        monetaryUnits: new MonetaryUnitsV2(client),
        operators: new OperatorsV2(client),
        orders: new OrdersV2(client),
        paymentMethods: new PaymentMethodsV2(client),
        productGroups: new ProductGroupsV2(client),
        products: new ProductsV2(client),
        reservations: new ReservationsV2(client),
        userGroups: new UserGroupsV2(client),
        users: new UsersV2(client),
        variables: new VariablesV2(client),
        verifications: new VerificationsV2(client)
    };
}

export class GizmoSDK {
    constructor(config) {
        this.client = new GizmoClient(config);
        this.v1 = createV1Categories(this.client);
        this.v2 = createV2Categories(this.client);
        // Для v3 аналогично, если появится swagger
        this.v3 = {};

        // Доступ к категориям только через sdk.v1, sdk.v2, sdk.v3
    }
}
