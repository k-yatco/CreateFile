
var selectedRow = null
/********* DROPDOWN */
var stepdeftrans = {
    "Scenario":"Scenario",
    "Precondition" :"Given",
    "Steps":"When",
    "Checkpoint":"Then"
}
var stepDefData = {
    Scenario: ["Scenario description"],
    Given: ["Start run test",
            "User is logged in (with testdata)",
            "Check if user is in homepage",
            "Show logs of description",
            "Navigate to Page",
            "Clear BDD Variables",
            "User focus on mobile testing",
            "mobile page is refresh",
            
        ],
    When: ["Go to Module Screen",
            "Delete save file",
            "Click button",
            "Click grid button",
            "Click subbutton in grid",
            "Click column header to filter or enable column",
            "Click button in header",
            "Click button in header after verify screen is open",
            "Click subbutton in header",
            "Click button in message prompt",
            "Click button in message prompt with timeout",
            "Click nofication menu",
            "Copy file",
            "Create new data by duplicating existing (e.g.item with testdata)",
            "Create new transaction by clicking new from search screen (with testdata)",
            "Create new transaction and update existing to random (with testdata)",
            "Create new transaction if not exist else skip (with testdata)",
            "Create new transaction or update if already exists (with testdata)",
            "Update existing data else create new by duplicating original (with testdata)",
            "Double click row upon filter by column header",
            "Delete existing record to create new",
            "Find column value to verify row before setting grid (curr to curr)",
            "Filter grid then click open in button",
            "Filter search screen (with testdata)",
            "Filter and select by grid row value",
            "Filter in grid",
            "Filter by column header",
            "Filter value in search then update if exist (with testdata)",
            "Save project variable in tab",
            "Save project variable in grid",
            "Select tab",
            "Select row in grid",
            "Deselect row in grid",
            "Select row in grid then click button",
            "Set grid row data (with testdata)",
            "User set tab data (with testdata)",
            "User skip create new data",
            "Open existing transaction from search screen",
            "Import file",
            "Write data in csv",
            "Update field with random value",
            "Replace value in project variable",
            "Generate random value in project variable",
            "Update csv file",
            "Focus on screen title",
      ],
Then:[
        "Check screen is open",
        "Check screen is closed",
        "Check screen status",
        "Check screen status with timeout",
        "Check summary label (with testdata)",
        "Check tab data (with testdata)",
        "Check summary grid total (with testdata)",
        "Check message prompt",
        "Check grid data (with testdata)",
        "Check label value",
        "Check no of rows in grid",
        "Filter grid then verify value (with testdata)",
        "Check if grid value exist else add grid value (with testdata)",
        "Check field value",
        "Check Audit log (with testdata)",
        "check Audit log with parentrowvalue",
        "Check field value",
        "Check footer company location",
        "Check color in grid cell (withtestdata)",

]
    
}
/*var stepDefData = {
    Scenario: ["[Scenario Desc]"],
    Given: ["Start executon run: [TestID]",
             "User is logged in",
             "Check if user is in homepage",
             "Logs: [LogDesc]",
             "Navigate to Page",
             "Clear BDD Variables",
             "User focus on mobile testing",
             "mobile page is refresh"
            ],
    When: ["User go to Module [Module] and [Menu]", 
            "User add column [Column] in [Grid] grid by [Column Header] column",
            "User click [Button] button",
            "User click [Button] button in [Grid] grid",
            "User click [Button] button [SubButton] sub button in [Grid] grid",
            "User click column [ColumnHeader] header column menu [Menu] with filter value [Column] in [Grid] grid",
            "User click [Button] header button",
            "User click [Button] header button in [Screen] screen",
            "User click [Button] header button [SubButton] sub button",
            "User click [Button] if message [Message] is shown",
            "User click [Button] if message [Message] is shown for [timeout]",
            "User click [Button] in message box",
            "User click notification [Notif]",
            "User copy file [Filename] from [FromPath] to [ToPath]",
            "User create new [Screen] by duplicating [Search] [Filter]",
            "User create new [Screen] transaction",
            "User create new [Screen] for [Search] [Filter]",
            "User create new [Screen] by [Search] [Filter] if not exists",
            "User create new or update [Screen] for [Search] [Filter]",
            "User create new [Screen] by duplicating [Search] [Filter] or update existing record",
            "User delete existing record and create new [Screen] by [Search] [Filter]",
            "User find and add grid row for column [Column] with value [Value] in [Grid] grid",
            "User filter [Filter] in [Grid] grid and add or update data",
            "User filter [FilterColumn] in grid and update row [Row]",
            "User filter [Filter] in [Grid] grid and open row [Row]",
            "User filter search grid in [Tab] tab",
            "User filter and select [Column] value [Value] in [Grid] grid",
            "User filter value [Filter] in [Grid] grid",
            "User save file [Filename]",
            "User save [ProjectVar] in [Tab] tab of [Screen] screen",
            "User save [ProjectVar] in [Grid] grid row [Row] of [Screen] screen",
            "User select [Tab] tab",
            "User select row [Row] in [Grid] grid",
            "User deselect row [Row] in [Grid] grid",
            "User select row [Row] in [Grid] grid then click [Button] button",
            "User select [Row] upon filter [Value] column [Column] [Grid] grid [Screen] screen",
            "User set grid data in row [Row]",
            "User set tab data",
            "User skip create new data",
            "User open existing [Screen] data for [Grid] [Item]",
            "User update existing data",
            "User update existing [Screen] for [Search] [Item]",
            "User click [Button] to import file [Filename] in [Screen] screen",
            "User write in [Data] in csv file [Filename] from [Folder]",
            "User replace value [From] to [To] in variable [ProjectVar]",
            "User generate random [Keyword] to project variable [ProjectVar]",
            "User update row [Row] of csv file [Filename]",
            "User focus on [Title] screen "
         ],
    Then: [
         "Should open [Screen] screen",
         "Should close [Screen] screen",
         "Should wait for [Status] status",
         "Should wait for [Status] status for [Timeout] seconds",
         "Should save [ProjectVar] in [Tab] tab of [Screen] screen",
         "Should verify summary label on [Tab] tab",
         "Should verify data tab",
         "Should save [ProjectVar] in [Grid] grid row [Row] of [Screen] screen",
         "Should verify summary total on [Grid] grid row [Row]",
         "Should verify message [message||button||type] box",
         "Should verify grid row [Row]",
         "Should verify data label",
         "Should show [Row] rows in [Grid] grid",
         "Should filter [Column] in [Grid] grid and verify row [Row]",
         "Should verify grid row [Row] or add if not exist",
         "Should verify audit log in row [Row]",
         "Should verify audit sub log in row[Row] is [SubRow] for [ParentRowValue]",
        
        ]
}*/

var param =  {
    "[Scenario Desc]": ["Scenario Desc"],
    //given
    "Start executon run: [TestID]": ["TestID"],
    "Logs: [LogDesc]": ["LogDesc"],


    //when
    "User go to Module [Module] and [Menu]": ["Module","Menu"],
    "User add column [Column] in [Grid] grid by [Column Header] column": ["Column","Grid","Column Header"],
    "User click [Button] button":["Button"],
    "User click [Button] button in [Grid] grid":["Button","Grid"],
    "User click [Button] button [SubButton] sub button in [Grid] grid":["Button","SubButton","Grid"],
    "User click column [ColumnHeader] header column menu [Menu] with filter value [FilterValue] in [Grid] grid":["ColumnHeader","Menu","FilterValue","Grid"],
    "User click [Button] header button":["Button"],
    "User click [Button] header button in [Screen] screen":["Button","Screen"],
    "User click [Button] header button [SubButton] sub button":["Button","SubButton"],
    "User click [Button] if message [Message] is shown":["Button","Message"],
    "User click [Button] if message [Message] is shown for [timeout]":["Button","Message","timeout"],
    //"User click [Button] in message box":["Button"],
    "User click notification [NotifMenu]":["NotifMenu"],
    "User copy file [Filename] from [FromPath] to [ToPath]":["Filename","FromPath","ToPath"],
    "User create new [Screen] by duplicating [Search] [Filter]":["Screen","Search","Filter"],
    "User create new [Screen] transaction":["Screen"],
    "User create new [Screen] for [SearchField] [FilterValue]":["Screen","SearchField","FilterValue"],
    "User create new [Screen] by [SearchField] [FilterValue] if not exists":["Screen","SearchField","FilterValue"],
    "User create new or update [Screen] for [SearchField] [FilterValue]":["Screen","SearchField","FilterValue"],
    "User create new [Screen] by duplicating [SearchField] [FilterValue] or update existing record":["Screen","SearchField","FilterValue"],
    "User delete existing record and create new [Screen] by [SearchField] [FilterValue]":["Screen","SearchField","FilterValue"],
    "User find and add grid row for column [Column] with value [Value] in [Grid] grid":["Column","Value","Grid"],
   // "User filter [Filter] in [Grid] grid and add or update data":["Filter","Grid"],

    //"User filter [FilterColumn] in grid and update row [Row]":["FilterColumn","Row"],
    "User filter [Filter] in [Grid] grid and open row [Row]":["Filter","Grid","Row"],
    "User filter search grid in [Tab] tab":["Tab"],
    "User filter and select [Column] value [Value] in [Grid] grid":["Column","Value","Grid"],
    "User filter value [Filter] in [Grid] grid":["Filter","Grid"],
    "User save file [Filename]":["Filename"],
    "User save [ProjectVar] in [Tab] tab of [Screen] screen":["ProjectVar","Tab","Screen"],
    "User save [ProjectVar] in [Grid] grid row [Row] of [Screen] screen":["ProjectVar","Grid","Row","Screen"],
    "User select [Tab] tab":["Tab"],
    "User select row [Row] in [Grid] grid":["Row","Grid"],
    "User deselect row [Row] in [Grid] grid":["Row","Grid"],
    "User select row [Row] in [Grid] grid then click [Button] button":["Row","Grid","Button"],
    "User select [Row] upon filter [Value] column [Column] [Grid] grid [Screen] screen":["Row","Value","Column","Grid","Screen"],
    "User set grid data in row [Row]":["Row"],
    "User set tab data":[],
    "User skip create new data":[],
    "User open existing [Screen] data for [Grid] [Item]":["Screen","Grid","Item"],
    "User update existing [Screen] for [SearchField] [FilterValue]":["Screen","SearchField","FilterValue"],
    //"User open existing [Screen] for [SearchField] [FilterValue]":["Screen","SearchField","FilterValue"],
    "User click [Button] to import file [Filename] in [Screen] screen":["Button","Filename","Screen"],
    "User write in [Data] in csv file [Filename] from [Folder]":["Data","Filename","Folder"],
    "User update [Field] in [Tab] tab to random [Screen] for [SearchField] [FilterValue]":["Field","Tab","Screen","SearchField","FilterValue"],
    "User replace value [From] to [To] in variable [ProjectVar]":["From","To","ProjectVar"],
    "User generate random [Keyword] to project variable [ProjectVar]":["Keyword","ProjectVar"],
    "User update row [Row] of csv file [Filename]":["Row","Filename"],
    "User focus on [Title] screen":["Title"],
    "User change location to [Location]":["Location"],

    //then
    "Should open [Screen] screen,":["Screen"],
    "Should close [Screen] screen,":["Screen"],
    "Should wait for [Status] status,":["Status"],
    "Should wait for [Status] status for [Timeout] seconds,":["Status","Timeout"],
    "Should save [ProjectVar] in [Tab] tab of [Screen] screen,":["ProjectVar","Tab","Screen"],
    "Should verify summary label on [Tab] tab,":["Tab"],
    "Should verify data tab,":[],
    "Should save [ProjectVar] in [Grid] grid row [Row] of [Screen] screen,":["ProjectVar","Grid","Row","Screen"],
    "Should verify summary total on [Grid] grid row [Row],":["Grid","Row"],
    "Should verify message [MessageButtonType] box,":["MessageButtonType"],
    "Should verify grid row [Row],":["Row"],
    "Should verify data label,":[],
    "Should show [Row] rows in [Grid] grid,":["Row","Grid"],
    "Should filter [Column] in [Grid] grid and verify row [Row],":["Column","Grid","Row"],
    "Should verify grid row [Row] or add if not exist,":["Row"],
    "Should verify audit log in row [Row],":["Row"],
    "Should verify audit sub log in row[Row] is [SubRow] for [ParentRowValue],":["Row","SubRow","ParentRowValue"],
    "Should verify [Field] is [Value]":["Field","Value"],
    "Should verify the footer with company [Company] and location [Location]":["Company","Location"],
    "Should verify color row [Row]":["Row"]

}
  
var paramtranslate =  {
    "Scenario description":"[Scenario Desc]",
    //given
    "Start run test":"Start executon run: [TestID]",
    "User is logged in (with testdata)":"User is logged in",
    "Show logs of description": "Logs: [LogDesc]",


    //when
    //"Open existing transaction after searching (with testdata)" :"User open existing [Screen] dataor [SearchField] [FilterValue]",
    //"Add or update grid after filter from test data table (with testdata)":["User filter [FilterColumn] in grid and update row [Row]"],
    //"Add or Update data by opening another screen after filter (with testdata)":["User filter [Filter] in [Grid] grid and add or update data"],
     //"User click [Button] in message box":["Button"], duplicate with checking on message value
    "Go to Module Screen":"User go to Module [Module] and [Menu]",
    "Delete save file":"User save file [Filename]",
    "Click button":"User click [Button] button",
    "Click grid button":"User click [Button] button in [Grid] grid",
    "Click subbutton in grid":"User click [Button] button [SubButton] sub button in [Grid] grid",
    "Click column header to filter or enable column":"User click column [ColumnHeader] header column menu [Menu] with filter value [FilterValue] in [Grid] grid",
    "Click button in header":"User click [Button] header button",
    "Click button in header after verify screen is open":"User click [Button] header button in [Screen] screen",
    "Click subbutton in header":"User click [Button] header button [SubButton] sub button",
    "Click button in message prompt":"User click [Button] if message [Message] is shown",
    "Click button in message prompt with timeout":"User click [Button] if message [Message] is shown for [timeout]",
    "Click nofication menu":"User click notification [NotifMenu]",
    "Copy file":"User copy file [Filename] from [FromPath] to [ToPath]",
    "Create new data by duplicating existing (e.g.item with testdata)":"User create new [Screen] by duplicating [Search] [Filter]",
    "Create new transaction by clicking new from search screen (with testdata)":"User create new [Screen] transaction",
    "Create new transaction and update existing to random (with testdata)":"User create new [Screen] for [SearchField] [FilterValue]",
    "Create new transaction if not exist else skip (with testdata)":"User create new [Screen] by [SearchField] [FilterValue] if not exists",
    "Create new transaction or update if already exists (with testdata)":"User create new or update [Screen] for [SearchField] [FilterValue]",
    "Update existing data else create new by duplicating original (with testdata)":"User create new [Screen] by duplicating [SearchField] [FilterValue] or update existing record",
    "Double click row upon filter by column header":"User select [Row] upon filter [Value] column [Column] [Grid] grid [Screen] screen",
    "Delete existing record to create new":"User delete existing record and create new [Screen] by [SearchField] [FilterValue]",
    "Find column value to verify row before setting grid (curr to curr)":"User find and add grid row for column [Column] with value [Value] in [Grid] grid",
    "Filter grid then click open in button":"User filter [Filter] in [Grid] grid and open row [Row]",
    "Filter search screen (with testdata)":"User filter search grid in [Tab] tab",
    "Filter and select by grid row value":"User filter and select [Column] value [Value] in [Grid] grid",
    "Filter in grid":"User filter value [Filter] in [Grid] grid",
    "Filter by column header":"User add column [Column] in [Grid] grid by [Column Header] column",
    "Filter value in search then update if exist (with testdata)":"User update existing [Screen] for [SearchField] [FilterValue]",
    "Save project variable in tab":"User save [ProjectVar] in [Tab] tab of [Screen] screen",
    "Save project variable in grid":"User save [ProjectVar] in [Grid] grid row [Row] of [Screen] screen",
    "Select tab":"User select [Tab] tab",
    "Select row in grid":"User select row [Row] in [Grid] grid",
    "Deselect row in grid":"User deselect row [Row] in [Grid] grid",
    "Select row in grid then click button":"User select row [Row] in [Grid] grid then click [Button] button",
    "Set grid row data (with testdata)":"User set grid data in row [Row]",
    "User set tab data (with testdata)" :"User set tab data",
    "User skip create new data":"User skip create new data",
    "Open existing transaction from search screen":"User open existing [Screen] data for [Grid] [Item]",
    "Import file":"User click [Button] to import file [Filename] in [Screen] screen",
    "Write data in csv":"User write in [Data] in csv file [Filename] from [Folder]",
    "Update field with random value":"User update [Field] in [Tab] tab to random [Screen] for [SearchField] [FilterValue]",
    "Replace value in project variable":"User replace value [From] to [To] in variable [ProjectVar]",
    "Generate random value in project variable":"User generate random [Keyword] to project variable [ProjectVar]",
    "Update csv file":"User update row [Row] of csv file [Filename]",
    "Focus on screen title":"User focus on [Title] screen",
    "Change location from profile":"User change location to [Location]",


    //then
      //"Should save [ProjectVar] in [Tab] tab of [Screen] screen,":["ProjectVar","Tab","Screen"],
      //"Should save [ProjectVar] in [Grid] grid row [Row] of [Screen] screen,":["ProjectVar","Grid","Row","Screen"],
    "Check screen is open":"Should open [Screen] screen,",
    "Check screen is closed":"Should close [Screen] screen,",
    "Check screen status":"Should wait for [Status] status,",
    "Check screen status with timeout":"Should wait for [Status] status for [Timeout] seconds,",
    "Check summary label (with testdata)":"Should verify summary label on [Tab] tab,",
    "Check tab data (with testdata)":"Should verify data tab,",
    "Check summary grid total (with testdata)":"Should verify summary total on [Grid] grid row [Row],",
    "Check message prompt":"Should verify message [MessageButtonType] box,",
    "Check grid data (with testdata)":"Should verify grid row [Row],",
    "Check label value":"Should verify data label,",
    "Check no of rows in grid":"Should show [Row] rows in [Grid] grid,",
    "Filter grid then verify value (with testdata)":"Should filter [Column] in [Grid] grid and verify row [Row],",
    "Check if grid value exist else add grid value (with testdata)":"Should verify grid row [Row] or add if not exist,",
    "Check field value":"Should verify [Field] is [Value]",
    "Check Audit log (with testdata)":"Should verify audit log in row [Row],",
    "check Audit log with parentrowvalue":"Should verify audit sub log in row[Row] is [SubRow] for [ParentRowValue],",
    "Check field value":"Should verify [Field] is [Value]",
    "Check footer company location":"Should verify the footer with company [Company] and location [Location]",
    "Check color in grid cell (withtestdata)":"Should verify color row [Row]",


}

var table =[
    "Template",
    "Search_Table",
    "Login_Creds",
    "AR_Customer_Detail",
    "AR_Customer_Details",
    "AR_Customer_Entity",
    "AR_Customer_TaxException",
    "AR_Customer_FreightXRef",
    "AR_Invoice_Details",
    "AR_Invoice_Items",
    "AR_ItemTaxes_ItemTaxes",
    "AR_Invoice_PostTransaction",
    "AP_AddPayables_Details",
    "AP_AddPayables_ReceivedItems",
    "AP_Vendor_Details",
    "AP_Vendor_Entity",
    "AP_Vendor_EntityType",
    "AP_Vendor_Detail",
    "AP_Vendor_VendorTerm",
    "AP_Voucher_Details",
    "AP_Voucher_Search",
    "AP_Voucher_VoucherDetails",
    "EM_EntityLocation_Details",
    "EM_EntityLocation_SupplyPoint",
    "CI_Approval_Approvals",
    "CI_Approval_History",
    "CI_City_Search",
    "CI_City_Details",
    "CI_CompanyLocation_Detail",
    "CI_CompanyLocation_Search",
    "CI_CompanyLocation_Setup",
    "CI_CompanyLocation_SubLocation",
    "CI_CurrencyExchangeRate_CurrencyExchangeRate",
    "CI_CurrencyExchangeRate_CurrencyExchangeRateDetail",
    "CI_CurrencyExchangeRateType_GridTemplate",
    "CI_FreightTerm_Details",
    "CI_MarketZone_GridTemplate",
    "CI_SalesRep_Details",
    "CI_SalesRep_Entity",
    "CI_SalesRep_Salesperson",
    "CI_SalesRep_General",
    "CI_ShipVia_ShipViaTariff",
    "CI_ShipVia_ShipViaCategory",
    "CI_ShipVia_ShipViaFuelSurcharges",
    "CI_EntityTarifftype_GridTemplate",
    "CI_ChangePassword_Details",
    "CI_TaxGroup_TaxGroup",
    "CI_Terms_Details",
    "CI_Terms_Search",
    "CT_Contract_Detail",
    "CT_Contract_Details",
    "CT_Contract_History",
    "CT_Contract_Vessel",
    "CT_ContractSequence_Details",
    "IC_Category_Detail",
    "IC_Category_Tax",
    "IC_Commodity_Details",
    "IC_Commodity_Uom",
    "IC_Item_AdditionalSettings",
    "IC_Item_Category",
    "IC_Item_Commodity",
    "IC_Item_Cost",
    "IC_Item_Details",
    "IC_Item_LocationStore",
    "IC_Item_ManufacturingSettings",
    "IC_Item_Pricing",
    "IC_Item_Search",
    "IC_Item_UnitOfMeasure",
    "IC_ItemLocation_Details",
    "IC_InventoryReceipt_Details",
    "IC_InventoryReceipt_InventoryReceipt",
    "IC_InventoryReceipt_Charges",
    "IC_InventoryReceipt_PostTransaction",
    "IC_InventoryReceipt_RecapTransaction",
    "IC_UnitofMeasure_UOM",
    "IC_UnitofMeasure_Conversion",
    "IC_StorageUnit_Details",
    "IC_StorageUnit_Search",
    "LG_GenerateLoad_Details",
    "LG_LoadShipment_Details",
    "LG_LoadShipment_Orders",
    "LG_LoadShipment_LoadSchedule",
    "QM_BatchView_Search",
    "QM_CatalogueReconciliation_CatalogueReconciliationDetail",
    "QM_GardenMark_Details",
    "QM_GardenMark_Search",
    "QM_Sample_AuditLog",
    "QM_Sample_Auction",
    "QM_Sample_InitialBuy",
    "QM_Sample_Details",
    "QM_Sample_TestDetail",
    "QM_Sample_Search",
    "QM_ImportLog_TabTemplate",
    "QM_ImportLog_GardenMarkImportLog",
    "SC_DiscountSchedule_DiscountSchedule",
    "SC_DiscountSchedule_Details",
    "SC_Ticket_Details",
    "SC_Ticket_TabTemplate",
    "SC_ManualDistribution_Contract",
    "SC_ManualDistribution_Load",
    "SC_ManualDistribution_Spot",
    "RM_FutureMarket_Commodity",
    "RM_FutureMarket_Futures",
    "TR_TransportLoads_Details",
    "TR_TransportLoads_Receipts",
    "TR_TransportLoads_DistributionHeader",
    "TR_TransportLoads_DistributionDetail",
    "TR_AutoBlend_Details",
    "TR_AutoBlend_Ingredients",
    "MBIL_LoginConnection_Data",
    "MBIL_Login_Data",
    "MBIL_Shift_Data",
    "MBIL_Pick_Up_Detail_Data",
    "MBIL_Pull_Out_Data",
    "MBIL_Settings_Data",
    "MBIL_Order_Data",
    "MBIL_BOL_Data",
    "MBIL_Delivery_Data",
    //add inventory lot,mfg screens
    
]

/*var tabledata =  {
    Template: [""],
    Search_Table: ["Field","Condition","Value"],
    Login_Creds: ["Username","Password","Company"],
    AR_Customer_Detail: ["Field","Condition","Value"],
    AR_Customer_Details: ["Field","Condition","Value","Field","Condition","Value","Field","Condition","Value"],

}*/
var tabledata = {
    Template: [""],
    Search_Table: ["Field","Condition","Value"],
    Login_Creds: ["Username","Password","Company"],
    AR_Customer_Detail: ["AccountNo","Currency","ShipVia","Terms"],
    AR_Customer_Details: ["Name","Contact","Email","Location","Address","City","Zip","State","Country"],
    AR_Customer_Entity: ["Name","Contact","Email","Location","Address","City","Zip","State","Country","FreightTerm"],
    AR_Customer_TaxException: ["CustomerLocation","ItemCategory","ItemNo","TaxClass","TaxCode","SiteNo","State"],
    AR_Customer_FreightXRef: ["TariffType","CustomerLocation","SupplierZipCode","Category","FreightOnly","FreightType","FreightIn","Freight-Out","SurchargeOut"],
    AR_Invoice_Details: ["Source","Type","Customer","Book","SubBook","InvoiceDate","PostDate","Recurring","Location","BillTo","ShipTo","ShipVia","Contact","PONo","BOLNo","FreightTerm","ShipDate","Salesperson","Account","InvoiceNo","Split","TruckNo","Currency","Driver","Accrual","Applicator","Comments","ICT","FBillTo","FShipTo","Item","OnHand","Committed","Terms","DiscAvailable","OnOrder","BackOrder","DueDate","DiscTaken","LineBusiness","Subtotal","Tax","Total","AmtReceived","AmountDue"],
    AR_Invoice_Items: ["DocumentNo","ScaleTicketNo","CustomerReference","ItemNo","ContractNo","Sequence","ContractBal","Description","BOLNumber","CustomerStorage","Ordered","OrderUOM","Shipped","UOM","Discount","Tax","CurrencyUnit","Price","GrossPrice","ComputedGross","Total","TaxGroup","WeightUOM","StorageUnit","StorageLocation","VendorRebate","VendorBuyback"],
    AR_ItemTaxes_ItemTaxes: ["TaxGroup","TaxCode","CalculationMethod","Rate","Qty","Price","Total","TaxExempt","TaxAmount","FooterShipTo"],
    AR_Invoice_PostTransaction: ["AccountID","AccountDescription","TransactionDescription","LineDescription","AccountGroup","Currency","Debit","Credit","DebitUnit","CreditUnit"],
    AP_AddPayables_Details: ["Vendor","VendorNo"],
    AP_AddPayables_ReceivedItems: ["SourceNo","Date","ItemNo","Received","ToInvoice","Total"],
    AP_Vendor_Details: ["Name","Contact","Location","TBO/MixingUnit","Email","Phone","Address","City","Zip","State","Country"],
    AP_Vendor_Entity: ["Name","Contact","Location","Email","Phone","Address","City","Zip","State","Country","Timezone","Language","PrintedName"],
    AP_Vendor_EntityType: ["Type"],
    AP_Vendor_Detail: ["Type","VendorAccountNo","GLAccount","Currency","ShipFrom","PayTo","ShipVia","DefaultTerms","TransportTerminal"],
    AP_Vendor_VendorTerm: ["SpecificTerms"],
    AP_Voucher_Details: ["Type","Vendor","InvoiceDate","PostDate","Terms","DueDate","FreightTerms","ShipFromEntity","ShipFrom","ShipTo","TBO/MixingUnit","TaxPoint","InvoiceNo","InvoiceCtrlTotal","DeferredIntDate","InterestAccThru","PayTo","ShipVia","Contact","MixingUnit","Strategy","APAccount","Currency","CheckComments","Reference","OrderedBy","Subtotal","Tax","Total","AmountPaid","AmountDue","TermsDiscount","Override","DueifPaid"],
    AP_Voucher_Search: ["Voucher Type","Transaction Date","Due Date","Post Date","Commodity","Date Created","Invoice No.","Reference","Check Comments","Vendor Name","TBO/Mixing Unit","Payee Name","Total","Amount Due","Amount Paid","Tax","Posted","WithHeld","User Id"],
    AP_Voucher_VoucherDetails: ["Ordered","Billed","CashPrice","Cost","TBOUnit","Subtotal","Total","ProvPercent","ProvTotal","AccountID","Remarks","StorageLoc","ExpectedDate","BOL","SaleYear","SaleNo","PurchaseGrp","Catalogue","SaleDate","VendorLotNo","PreInvoiceGarden","PreInvoiceGardenInv","NoPack","NoPackUOM","Channel","PreInvoiceGarden","PreInvGardenInvoice","TotalNo","NoOfPkgs","NoOfPkgsUOM","Channel"],
    EM_EntityLocation_Details: ["FreightTerms"],
    EM_EntityLocation_SupplyPoint: ["GrossorNet","TerminalNo"],
    CI_Approval_Approvals: ["$TransactionNo","Type","Date","Name","EnteredBy","Amount","Currency","DueDate","Approver","Approve","Reject","Close","Reason"],
    CI_Approval_History: ["$TransactionNo","Type","Date","Name","EnteredBy","Amount","DueDate","Approver","Reason"],
    CI_City_Search: ["City","Country","State","City Description","Sub Cluster","Port","Arbitration","Inbound Text","Outbound Text"],
    CI_City_Details: ["CityRegion","Country","State","VATNo","SubCluster","Port","Default","LeadtimeatPort","Arbitration","LeadtimeatSource","GeographicalZone","InboundText","OutboundText"],
    CI_CompanyLocation_Detail: ["LocationName","Type","LocationNo","Address","City","Country","InternalNotes"],
    CI_CompanyLocation_Search: ["Location Name","Location Type","Location Number","Active"],
    CI_CompanyLocation_Setup: ["SkipTerms","PrintCashTendered","OverridePatronage","L1PlantCode","OrderSec2Required","OverrideMixerSize","EvenBatches","DefaultCustomBlend","AgroguideInterface"],
    CI_CompanyLocation_SubLocation: ["StorageLocation","Description","Classification"],
    CI_CurrencyExchangeRate_CurrencyExchangeRate: ["FromCurrency","ToCurrency"],
    CI_CurrencyExchangeRate_CurrencyExchangeRateDetail: ["Rate","RateType","EffectiveDate","Source","CreateDate"],
    CI_CurrencyExchangeRateType_GridTemplate: ["Rate Type","Description","Cash Flow"],
    CI_FreightTerm_Details: ["ContractBasis","FreightTerms","TaxationPoint","Description","Default","Position","INCOLocation","Active"],
    CI_MarketZone_GridTemplate: ["MarketZone","Description"],
    CI_SalesRep_Details: ["Name","Contact","Email","Location","Address","City","Zip","State","Country"],
    CI_SalesRep_Entity: ["Name","Contact","Email","Location","Address","City","Zip","State","Country"],
    CI_SalesRep_Salesperson: ["Type"],
    CI_SalesRep_General: ["Enable","PortalAdmin","PortalRole"],
    CI_ShipVia_ShipViaTariff: ["Description","TariffType","EffectiveDate"],
    CI_ShipVia_ShipViaCategory: ["Category"],
    CI_ShipVia_ShipViaFuelSurcharges: ["FuelSurcharge","EffectiveDate"],
    CI_EntityTarifftype_GridTemplate: ["TariffType"],
    CI_ChangePassword_Details: ["NewPassword","ConfirmPassword"],
    CI_TaxGroup_TaxGroup: [],
    CI_Terms_Details: ["Terms","TermsCode","BalanceDue","AllowEFTonInvoices","Active"],
    CI_Terms_Search: ["Terms","Terms Code","BalanceDue","AllowEFTonInvoices","Active"],
    CT_Contract_Detail: ["Contracted","Balance","Applied","Scheduled","Available"],
    CT_Contract_Details: ["Type","Customer","Vendor","Commodity","Qty","UOM","PricingType","Salesperson"],
    CT_Contract_History: ["ShowDeleted","AdjustmentType","FieldName","OldValue","TransactionQty","NewValue","Balance"],
    CT_Contract_Vessel: ["LoadingPoint","LoadingCity","DestinationPoint","DestinationPort"],
    CT_ContractSequence_Details: ["StartDate","EndDate","Item","FutureMarket","MnYr","Basis","BasisUOM"],
    IC_Category_Detail: ["CategoryCode","Description","InventoryType"],
    IC_Category_Tax: [],
    IC_Commodity_Details: ["CommodityCode","Description","ExchangeTraded","MarktoMarket","DecimalDPR","Min","Max"],
    IC_Commodity_Uom: ["UOM","UnitQty","StockUnit","DefaultUOM"],
    IC_Item_AdditionalSettings: ["AvgBulkDensity","NetWeight"],
    IC_Item_Category: [],
    IC_Item_Commodity: ["Origin","ManufacturingType","Grade","SubCluster","Color","Sustainability","CombinesConstraints","Cluster","LeafStyle","AllocationCode","Appearance","Quality"],
    IC_Item_Cost: ["InventoryCost","ChargeEntity","BasisContract","CostType","OnCost","CostMethod","CostQty","CostUOM"],
    IC_Item_Details: ["ItemNo","Description","ItemType","Commodity","Category","LotTracking","Feedstock","LeafSize","LeafSizeCategory","ManufactureType"],
    IC_Item_LocationStore: ["TBOMixingUnit","OnHand","CostingMethod","NegativeInventory","ReorderPoint","MinOrder","MinStock","StorageUnitRequired"],
    IC_Item_ManufacturingSettings: ["Lifetime","LifetimeType","ReceiveLife","VersionNo"],
    IC_Item_Pricing: ["$Location","Location","StandardCost","LastCost","AverageCost"],
    IC_Item_Search: ["Item No","Type","Description","Feedstock","Status","Category","Commodity","Leaf Size Category","Leaf Size","Manufacturing Type"],
    IC_Item_UnitOfMeasure: ["Unit","UnitQty","StockUnit","AllowPurchase","AllowSale","MaxQuantity","StandardWeight"],
    IC_ItemLocation_Details: ["TBOMixingUnit","CostingMethod","AllowZero","NegativeInventory","ReorderPoint","MinOrder","MinStock","StorageUnitRequired"],
    IC_InventoryReceipt_Details: ["OrderType","SourceType","Vendor","ShipFromEntity","ShipFrom","Location","ReceiptDate","FreightTerms","Currency","BOLNo","ReceiptNo","InvoiceAmount","VendorRefNo","WarehouseRefNo","Receiver","ShipVia","GrossWgt","Subtotal","Tax","Charges","Total"],
    IC_InventoryReceipt_InventoryReceipt: ["SourceNo","ItemNo","Description","ChargeLink","ReceiptQty","Cost","CostUOM","GrossNetUOM","Gross","Net","LineTotal","TaxGroup","Tax","Currency","StorageLoc","StorageUnit","BOLNo","ReceiptNo","VendorRefNo","WarehouseRefNo","Receiver","ShipVia","Subtotal","GrossWgt","LotGrossWgt","GrossDiff","NetWgt","LotNetWgt","NetDiff","GainLoss","GainLossPer"],
    IC_InventoryReceipt_Charges: ["OtherCharges","ChargeLink","OnCost","CostMethod","Currency","Quantity","Rate","UOM","Amount","Vendor","InventoryCost","AllocateCost","ChargeEntity","TaxGroup","Tax"],
    IC_InventoryReceipt_PostTransaction: ["AccountID","AccountDescription","TransactionDescription","LineDescription","AccountGroup","Currency","Debit","Credit","DebitUnit","CreditUnit"],
    IC_InventoryReceipt_RecapTransaction: ["AccountID","AccountDescription","TransactionDescription","LineDescription","AccountGroup","Currency","Debit","Credit","DebitUnit","CreditUnit"],
    IC_UnitofMeasure_UOM: ["UOM","Symbol","UnitType","Decimals"],
    IC_UnitofMeasure_Conversion: ["ToUOM","Conversion"],
    IC_StorageUnit_Details: ["Name","Description","StorageUnitType","TBO/MixingUnit","StorageLocation","AllowConsume","AllowMultiItems","AllowMultiLots"],
    IC_StorageUnit_Search: ["Name","Description","Storage Unit Type","TBO/Mixing Unit","Storage Location"],
    LG_GenerateLoad_Details: ["UnitsPerLoad","NoOfLoads","TotalQty"],
    LG_LoadShipment_Details: ["ShipmentType","TransactionType","SourceType","UserLocation","FreightTerms","MixingUnit","TransportMode","ScheduleDate","Channel","TransUsedBy","Status","lblQuantity","lblGross","lblTare","lblNet"],
    LG_LoadShipment_Orders: ["Hauler","Driver","TruckNo"],
    LG_LoadShipment_LoadSchedule: ["BatchID","Vendor","VendorLocation","Customer","CustomerLocation","VendorRef","CompanyLoc","ScompanyLoc","TeaLingo","Item","Quantity","UOM","Gross","Tare","Net","WgtUOM","PricedStatus","UnitPrice","PriceCurrency","PriceUOM","SaleYear","SaleNo","Catalogue","ChopNo","VendorLotNo","Broker","Grade","GardenMark","Sustainability","ManufacturingType"],
    QM_BatchView_Search: ["Batch No.","Tin #","Parent Batch","Item No","Item Desc","TBO/Mixing Unit","Buying Center Loc","Mixing Location","Storage Location","Storage Unit","Total Quantity","Total Qty UOM"],
    QM_CatalogueReconciliation_CatalogueReconciliationDetail: ["SaleYear","BuyingCenter","SaleNo","TeaCatType","Supplier","VendorLotNo","SupplierPreInvoice","BasePrice","PreInvoicePrice","Qty","PreInvoiceQty","Value","InvoiceValue","Garden","PreInvoiceGarden","Grade","PreInvoiceGrade","ChopNo","PreInvoiceChopNo"],
    QM_GardenMark_Details: ["GardenMark","Origin","Producer","Sustainability","CertifiedDate","ExpiryDate"],
    QM_GardenMark_Search: ["Garden Mark","Origin","Producer","Sustainability","Certified Date","Expiry Date"],
    QM_Sample_AuditLog: ["Change Type","Original Value","New Value","Changed By"],
    QM_Sample_Auction: ["SaleYear","SaleDate","CatalogueType","PromptDate","ChopNo","TeaGrade","ManufacturingLeafType","Color","GardenMark","ManufacturingDate","TotalNoPkgs","NoOfPkgs","NoOfPkgsUOM","Sustainability","SupplierValuation","PurchaseGrp","LotNumber","BuyingNo","Currency","FromLocationCode","Size","LeafStyle","Channel","DestStorageLoc"],
    QM_Sample_InitialBuy: ["Buyer1","QtyBought1","QtyUOM1","Price1","PriceUOM1","Buyer2","QtyBought2","QtyUOM2","Price2","PriceUOM2"],
    QM_Sample_Details: ["SampleType","SampleNo","TBO/MixingUnit","ContractNo","ItemNo","MixingUnit","Origin","NetWeight","NetWeightUOM","Quantity","QuantityUOM","ReceivedDate","SampleStatus","Warehouse","VendorLotNo"],
    QM_Sample_TestDetail: ["PropertyName","ActualValue","Result"],
    QM_Sample_Search: [],
    QM_ImportLog_TabTemplate: ["ImportFormat","FileName","UserName","ImportDate"],
    QM_ImportLog_GardenMarkImportLog: ["LogResult","GardenMark","Origin","Country","Producer","Sustainability","CertifiedDate","ExpiryDate","Success"],
    SC_DiscountSchedule_DiscountSchedule: ["DiscountCode"],
    SC_DiscountSchedule_Details: ["Description","Commodity"],
    SC_Ticket_Details: ["Type","Vendor","Customer","Item","Distribution","StoreLoc","StoreUnit","Pit","ScaleOperator"],
    SC_Ticket_TabTemplate: ["GrossWeight","TareWeight","NetWeight","GrossUnit","ShrinkUnit","NetUnit"],
    SC_ManualDistribution_Contract: ["UnitEntry"],
    SC_ManualDistribution_Load: ["UnitEntry"],
    SC_ManualDistribution_Spot: ["UnitEntry","Futures"],
    RM_FutureMarket_Commodity: ["Commodity"],
    RM_FutureMarket_Futures: ["MarketName","ContractSize","Commodity","UOM","Decimal","Symbol","MonthsOpen","Active","Options","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    TR_TransportLoads_Details: ["LoadSchedule","LoadDateTime","FreightItem","ShipVia","Seller","Driver","TruckNo","TransportsNo"],
    TR_TransportLoads_Receipts: ["Origin","FuelSupplier","SupplyPoint","BulkLocation","BOLNo","PurchaseItem","GrossUnits","NetUnits","UnitCost","Surcharge","FreightRate","TaxGroup","ReceiptLink"],
    TR_TransportLoads_DistributionHeader: ["Destination","Customer","PurchaseOrder","Comments","ShipTo","BulkLocation","Salesperson","InvoiceDate"],
    TR_TransportLoads_DistributionDetail: ["ReceiptsLink","Price","Item","Units","Surcharge","FreightRate","TaxGroup","Blend","StickStartReading","StickEndReading"],
    TR_AutoBlend_Details: [],
    TR_AutoBlend_Ingredients: [],
    MBIL_LoginConnection_Data: ["Link","Company","ServerName"],
    MBIL_Login_Data: ["Username","Password"],
    MBIL_Shift_Data: ["Truck:","Shift #:","Start Odometer:"],
    MBIL_Pick_Up_Detail_Data: ["Load Number ","Seller","Sales Person","Terminal","Terminal Ref No","Vendor Ref/Load Ref","Pull Window","Date","Name","Address","City, Zip"],
    MBIL_Pull_Out_Data: ["Terminal:","Supplier:","Vendor Ref/Load Ref:","Load Number:","PO:","SelectedItemNo","Checkbox","Compartment","GrossVolume","NetVolume","Total Planned:","Total Gross:","Total Net:","ItemNo"],
    MBIL_Settings_Data: ["Location:"],
    MBIL_Order_Data: ["Customer:","Location:","Address:","Phone:","Email:","Product","Volume","Status","Tank","Stick Start Reading"],
    MBIL_BOL_Data: ["BOLNumber"],
    MBIL_Delivery_Data: ["Customer:","Product:","Tank:","STICK END READING"]

}

/**	// Activate tooltip
	$('[data-toggle="tooltip"]').tooltip();
	
	// Select/Deselect checkboxes
	var checkbox = $('table tbody input[type="checkbox"]');
	$("#selectAll").click(function(){
		if(this.checked){
			checkbox.each(function(){
				this.checked = true;                        
			});
		} else{
			checkbox.each(function(){
				this.checked = false;                        
			});
		} 
	});
	checkbox.click(function(){
		if(!this.checked){
			$("#selectAll").prop("checked", false);
		}
	}); */
//load test data table dropdown
/*$(document).ready(function(){
    //$('.collapse').collapse();
    /*$('#stepdef').chosen();
    $('#steps').chosen();
    $('#tbldata').chosen();
    var option = '';
    for (var i=0;i<table.length;i++){
        console.log(table[i])
        option += '<option></option>';
        option += '<option value="'+ table[i] + '">' + table[i] + '</option>';
    }
    $('#tbldata').append(option);
    $('#tbldata').trigger("chosen:updated");*/

//});



$(document).ready(function(){
    $('#template').chosen({width: "80%",allow_single_deselect:true });
    $('#stepdef').chosen({width: "80%",allow_single_deselect:true });
    $('#steps').chosen({width: "80%",allow_single_deselect:true });
    $('#tbldata').chosen({width: "80%",allow_single_deselect:true });
    var option = '';
    for (var i=0;i<table.length;i++){
        console.log(table[i])
        option += '<option></option>';
        option += '<option value="'+ table[i] + '">' + table[i] + '</option>';
    }
    $('#tbldata').append(option);
    $('#tbldata').trigger("chosen:updated");

});

$("#btnAddSteps").click(function(){
    $('#tbldata').chosen({width: "80%"});
    $("#parameters").find('div').remove();
   // $("#parameters").val('').trigger("chosen:updated");
    $("#stepdef").val('').trigger("chosen:updated");
    $("#steps").val('').trigger("chosen:updated");
    $("#tbldata").val('').trigger("chosen:updated");
   
});

//append main table upon click add in modal
$("#btnAdd").click(function(){
        //$(this).attr("disabled", "false");
       // $(this).attr("enabled", "enabled");
        var row = "";
        var index = $("#maintable tbody tr:last-child").index();
        var chkbox = $("#maintable thead tr:first-child").html();
        //console.log(chkbox)
        //console.log(index)
        var chkbx = '<span class="custom-checkbox">'+
        '<input type="checkbox" id="selectAll">'+
        '<label for="selectAll"></label></span>'
        var sd = document.getElementById("fstepdef").getElementsByTagName("span")[0].innerText
        var stp = document.getElementById("fsteps").getElementsByTagName("span")[0].innerText;
        if(stp == "Select an Option"){
            stp = "";
        }

        var p = getParamForm();
        if(p == "Select an Option"){
            P = "";
        }

        //selectedRow.cells[2].innerHTML
        var tbl = document.getElementById("ftbl").getElementsByTagName("span")[0].innerText;
        if(tbl == "Select an Option"){
            tbl = "";
        }
        var td = addtable();
        console.log(td)
        var row = '<tr>'+
                '<td>'+chkbx+'</td>'+
                '<td>'+sd+'</td>'+
                '<td>'+stp+'</td>'+
                '<td>'+p+'</td>'+
                '<td>'+tbl+'</td>'+
                '<td><div class="table-responsive"><table '+td+'</table></div></td>'+
                '</tr>';
       // console.log(row)

        //$('.modal').modal('hide');
        $("#addStepsModal .close").click()
        $('#maintable').append(row);
       return false;
});
/*$(document).on('load','#addStepsModal',function(){
    $("#testdata").find('tr').remove();
   // $("#testdata").find('table').remove();
   // $('#addStepsModal').modal('show');
    //$('#testdata').empty().append($('<table>'))
    //$('#seltemp').chosen();
	/*$("#addStepsModal").modal('show');
    $('#addStepsModal').on('show.bs.modal', function (e) {
        $('.chosen-select').chosen();
    });*/
   /* $('#addStepsModal').on('show.bs.modal', function (e) {
        $('#stepdef').chosen();
    });*/
 //   var mod = $('#addStepsModal').hasClass('show');
  //  console.log("test" + mod)

//});

//load steps dropdown upon selection of step definition
$(document).on("change", "#stepdef",function(){
    $('#steps').empty().append($('< option>'))
    $('#steps').trigger("chosen:updated");
    var el = $(this);
    $('#steps').chosen();
    //if (el.val() === "Given") {
       //console.log(el.val())
      var stepdp = '';
        /*  for (var i=0;i<stepDefData[el.val()].length;i++){
            console.log(stepDefData[el.val()][i])
            stepdp += '<option></option>';
            stepdp += '<option value="'+ stepDefData[el.val()][i] + '">' + stepDefData[el.val()][i] + '</option>';
            
        }*/
        //console.log(stepdeftrans[el.val()])
        for (var i=0;i<stepDefData[stepdeftrans[el.val()]].length;i++){
            //console.log(stepDefData[el.val()][i])
            stepdp += '<option></option>';
            stepdp += '<option value="'+ stepDefData[stepdeftrans[el.val()]][i] + '">' + stepDefData[stepdeftrans[el.val()]][i] + '</option>';
            
        }
        $('#steps').append(stepdp);
        $('#steps').trigger("chosen:updated");
});

//load field upon selecting stepss
$(document).on("change", "#steps",function(){
    //$("#parameters").chosen("destroy");
    $("#parameters").find('input, label').remove();
    var el = $(this);
    var selectedstep = el.val();
    //console.log(selectedstep)
    var paramfld = "";
    if( paramtranslate[selectedstep]){
    var paramtns = paramtranslate[selectedstep];
    //console.log(paramtns)
    var paramvar = param[paramtns];
    //console.log(paramvar)
    if(paramvar){
        var plen = paramvar.length;
        //console.log(plen)
        //console.log(paramvar[0])
        var paramfld = '<table><div id="myDiv">';
        for (var i=0;i<plen;i++){
             //paramfld += '<div><label>' + param[paramvar][i] + '  <input type="text" id="data'+param[paramvar][i]+'" class="form-control"></input></div>'
             paramfld += '<div><label>' + paramvar[i] + '  <input type="text" id="data'+paramvar[i]+'" class="form-control"></input></div>'
        }
        paramfld += "</div></table>";
        $('#parameters').append(paramfld);
    }
}

});

//load table upon selecting the table
$(document).on("change", "#tbldata",function(){
    //$("#parameters").chosen("destroy");
    //$("#testdata").find('table').remove();
    $("#testdata").find('tr').remove();
    var tdoption = "";
    var el = $(this);
    var testdatatbl =  el.val();
    var tdvar = tabledata[el.val()];
   
    //console.log("testdata " + el.val())
    //console.log("testdata " + tabledata[el.val()])
   // console.log("testdata " + tabledata[el.val()].length)
   //material-icons dp48
   //material-icons dp48
   if(tdvar){
    var tdlen = tabledata[el.val()].length
        var tdlen = tdvar.length;
        //header
        var tdoption = '<thead id="dataheader">'
        //tdoption +=  '<td><span onclick="cloneColumn(this)">+</span><span onclick="deleteColumn(this)">-</span></td>';
       // tdoption +=  '<td><i onclick="cloneColumn(this)" class="material-icons">&#xe148;</i><i onclick="deleteColumn(this)" class="material-icons">&#xe15d;</i></td>';
       tdoption +=  '<td></td>'
        //add plus minus row button 
        for (i = 0; i<tdlen;i++){
            tdoption +=  '<td id="col'+tabledata[el.val()][i]+'"><span onclick="cloneColumn(this)" class="bi bi-plus-square"></span><span onclick="deleteColumn(this)" class="bi bi-trash"></span></td>';
        }

        tdoption +=  '</thead><tbody id="databody"><tr id="row0"><td><span data-id="addrow" onclick="cloneRow()" class="bi bi-plus-square"></span><br><span data-id="delete" onclick="deleteRows(this)" class="bi bi-trash"></span></td>'
        for (i = 0; i<tdlen;i++){
            tdoption +=  '<td id="col'+tabledata[el.val()][i]+'" contenteditable="true">'+tabledata[el.val()][i]+'</td>';
        }
        tdoption += '<tr id="row1"><td><span data-id="addrow" onclick="cloneRow()" class="bi bi-plus-square"></span><br><span data-id="delete" onclick="deleteRows(this)" class="bi bi-trash"></span></td>'
        for (i = 0; i<tdlen;i++){
            tdoption +=  '<td  id="coldata'+tabledata[el.val()][i]+'" contenteditable="true"></td>';
        }
        tdoption +=  '</tr></tbody>';

        $('#testdata').append(tdoption);
    }
});


//closing, cancel  in modal
$(document).on("click", "#btnCancel, .close",function(){
    $("#testdata").find('tr').remove();
});






function cloneRow() {
    var table = document.getElementById('testdata');
    var row = document.getElementById("row0"); // find row to copy
    var tbody = document.getElementById("databody"); // find table to append to
    var clone = row.cloneNode(true); // copy children too
    var rowCount = table.rows.length;
    clone.id = "row"+(rowCount-1); // change id or other attributes/contents
    tbody.appendChild(clone); 
    //console.log(rowCount)
    //var rowCount = parseInt(document.getElementById(‘rowID’).value, 10);
}

function deleteRows(td){
    var row = td.parentElement.parentElement;
    //console.log(row)
    document.getElementById("testdata")
	var table = document.getElementById('testdata');
    //console.log(table)
	var rowCount = table.rows.length;
   // console.log(rowCount)
	if(rowCount > '2'){
		//var row = table.deleteRow(rowCount-1);
        var row = table.deleteRow(row.rowIndex);
		rowCount--;
	}
	else{
		alert('There should be atleast one row');
	}
}

function deleteColumn (td) {
    var col = td.parentElement;
   // console.log(col.cellIndex);
    var colindex = col.cellIndex;
    //document.getElementById("testdata")
	var table = document.getElementById('testdata');
    rows = table.rows;
	var rowCount = table.rows.length;
    var cellCount = table.rows[0].cells.length; 
    for (var i = 0; i < rowCount; i++) {
       rows[i].deleteCell(colindex);
    }
    
}

function cloneColumn(td) {
    var col = td.parentElement;
    var colindex = col.cellIndex;
	var table = document.getElementById('testdata');
    rows = table.rows;
    var rowCount = table.rows.length;
    //console.log(rowCount)
    var cellCount = table.rows[0].cells.length;

   for (var i = 0; i < rowCount; i++) {
       // var value = rows[i].insertCell(cellCount).innerHTML;
        var x = rows[i].insertCell(colindex+1);
        if(i == 0){
            x.innerHTML =  '<td id="tblheadtest"><span onclick="cloneColumn(this)" class="bi bi-plus-square"></span><span onclick="deleteColumn(this)" class="bi bi-trash"></span></td>';
        }else{
            x.setAttribute('contenteditable', true);
      
        }

   }

    
}

//post test data in main table as table
function addtable(){
    var data = "";
 //var data = "|";
 var table = document.getElementById("testdata");
 //var tbody = table.getElementsByTagName("tbody")
 if(table){
        var data = "<tbody>";
        var rowCount = table.rows.length;
        if(rowCount > 0){
            console.log(rowCount)
            var cellCount = table.rows[0].cells.length; 
            for (i = 1;i<rowCount;i++){
                data += "<tr>";
                    for (j = 1;j<cellCount;j++){
                        data +=  "<td>"+table.rows[i].querySelectorAll('#testdata td')[j].textContent + "</td>";
                    }
                }
                    data += "</tr></tbody>";
            // console.log(data);
            return data;
        }      
    }
}

function getParamForm() {
    //const data = [];
    var data = "";
    var div = document.querySelectorAll('#myDiv div');
    console.log(div.length)
    for(var i =0; i < div.length; i++){
        if(data != ""){
            data += ",\n"
        }
        var label = document.querySelectorAll('#myDiv label');
        var input = document.querySelectorAll('#myDiv input');
        data += label[i].textContent+": "+input[i].value;
    }        
    return data;
}