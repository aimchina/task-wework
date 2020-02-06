import {web} from "./config.js"

const serviceModule = {
	//删除客户
    customdel: {
        url: web.webUrl+'v2/sale/sale/delete',
        method: 'DELETE'
    },
	//线索列表
	 cluelist: {
	    url: web.webUrl+'v1/chance/chances',
	    method: 'GET'
	},
	//客户列表
	 customlist: {
	    url: web.webUrl+'v3/sale/sale/index',
	    method: 'GET'
	},
	//客户详情
	customdetail: {
	    url: web.webUrl+'v3/sale/sale/info',
	    method: 'post'
	},
	//线索详情
	cluedetail: {
	    url: web.webUrl+'v1/chance/chances',
	    method: 'GET'
	},
	//合同列表
	contractlist:{
		url: web.webUrl+'v3/contract/contracts',
		method: 'GET'
	},
	//合同详情
	contractdetail:{
		url: web.webUrl+'v3/contract/contracts/20',
		method: 'GET'
	},
	//客户状态
	customstatus:{
		url: web.webUrl+'v2/sales_status/sales-status',
		method: 'GET'
	},
	//客户分类
	customfenlei:{
		url: web.webUrl+'v2/custom_category/custom-category',
		method: 'GET'
	},
	//客户标签
	custombiaoqian:{
		url: web.webUrl+'v2/tag/tags',
		method: 'GET'
	},
	//新增客户
	addcustom:{
		url: web.webUrl+'v3/sale/sale/create',
		method: 'post'
	},
	//新增线索
	addclue:{
		url: web.webUrl+'v1/chance/chances',
		method: 'post'
	},
	//线索类型
	getleixing:{
		url: web.webUrl+'v1/config/configs',
		method: 'get'
	},
	//线索来源
	getlaiyuan:{
		url: web.webUrl+'v1/opportunity-froms',
		method: 'get'
	},
	//销售阶段
	getjieduan:{
		url: web.webUrl+'v1/sell_status/sell-statuses',
		method: 'get'
	},
	//我的客户列表
	getmykehu:{
		url: web.webUrl+'/v3/sale/sale/index',
		method: 'get'
	},
	//回款列表
	moneylist:{
		url: web.webUrl+'v1/payments',
		method: 'get'
	},
	//回款详情
	mondetail:{
		url: web.webUrl+'v1/payments',
		method: 'get'
	},
	//合同名称
	getht:{
		url: web.webUrl+'v1/payments',
		method: 'get'
	},
	//审核人列表
	shenherenlist:{
		url: web.webUrl+'v2/department/department/tree',
		method: 'get'
	},
	//知识列表
	notelist:{
		url: web.webUrl+'v2/tag/tags',
		method: 'get'
	},
	//任务回复内容
	comment_content:{
		url: web.webUrl+'v2/task/replies',
		method: 'post'
	},
	//删除任务
	del_comment:{
		url: web.webUrl+'v2/task/replies',
		method: 'delete'
	},
	//任务编辑
	missionedit:{
		url: web.webUrl+'v2/task/task/edit',
		method: 'post'
	},
	//任务详情
	missiondetail:{
		url: web.webUrl+'v3/task/tasks/',
		method: 'post'
	},
	//任务列表
	tasklist2:{
		url: web.webUrl+'v2/task/task/time',
		method: 'get'
	},
	//添加项目
	addtask:{
		url: web.webUrl+'v2/task/tteams',
		method: 'post'
	},
	// 任务列表
	missionlist:{
		url: web.webUrl+'v2/task/task/board',
		method: 'get'
	},
	// 项目列表
	tasklist:{
		url: web.webUrl+'v3/task/tteam',
		method: 'get'
	},
	// 添加任务
	addmission:{
		url: web.webUrl+'v2/task/tasks',
		method: 'post'
	},
	//任务关注
	followmission:{
		url: web.webUrl+'v1/task/task-attentions',
		method: 'post'
	},
	//取消关注
	cancelmission:{
		url: web.webUrl+'v1/task/task-attentions/',
		method: 'delete'
	},
	//强制完成
	complemission:{
		url: web.webUrl+'v1/task/task/toend',
		method: 'post'
	},
	//相关人员
	relatedman:{
		url: web.webUrl+'v1/task/task/member',
		method: 'post'
	},
	//拖动面板
	draggable:{
		url: web.webUrl+'/v1/task/task/move',
		method: 'post'
	},
	//拖动面板
	delMission:{
		url: web.webUrl+'/v1/task/task/toend',
		method: 'post'
	},
	//删除板块
	delPlate:{
		url: web.webUrl+'v1/task/panels/',
		method: 'delete'
	},
	//添加附件
	addFile:{
		url: web.webUrl+'v1/document/document/taskidadd',
		method: 'post'
	},
	//上传附件
	uploadFile:{
		url: web.webUrl+'/v1/feedback/feedback/mulupload',
		method: 'post'
	},
	//删除附件
	delFile:{
		url: web.webUrl+'v1/document/uploads/',
		method: 'delete'
	},
	//模板列表
	templateList:{
		url: web.webUrl+'v2/task/panel-template',
		method: 'GET'
	},
	//添加板块
	addtaskmould:{
		url: web.webUrl+'v1/task/panels',
		method: 'post'
	},
	//设置为常用项目
	isImportant:{
		url: web.webUrl+'v2/task/tteam/settag',
		method: 'post'
	},
	//删除项目
	del_item:{
		url: web.webUrl+'v1/task/tteams/',
		method: 'delete'
	},
	//企业微信绑定
	relehand:{
		url: web.webUrl+'v2/user/user/qywxbinding',
		method: 'post'
	},		
};


const ApiSetting = { ...serviceModule}
export default ApiSetting
