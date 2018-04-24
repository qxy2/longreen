/**
 * Created by Administrator on 2016/7/15.
 */
$(function () {

    var navId = getParameter('id');
    if(navId==1){
        $('#values').addClass('hover');
    }else if(navId==2){
        $('#team').addClass('hover');
    }

    var shenzheng = {
        'position1':{//DB架构师
            'data_name':'DB架构师',
            'data_title':'5年以上大型互联网行业交互平台开发经验；具备Orcale，MySQL，sqlserver，PostgreSQL等......',
            'describe':['<li>1、负责业务数据库系统架构设计，包括高并发/高性能架构、高可用性架构；</li>'+
                '<li>2、跟踪分布式、内存数据库领域新技术和演进方向，并根据产品需要设计合理的解决方案；</li>'+
                '<li>3、及时解决项目开发或产品研发中的技术难题,对设计平台的最终性能和稳定性负责；</li>'+
                '<li>4、提供数据流程，优化数据查询（data access），协调系统安装，完成文档 。</li>'],
            'require':['<li>1、5年以上大型互联网行业交互平台开发经验；</li>'+
                '<li>2、具备Orcale，MySQL，sqlserver，PostgreSQL等数据库的一种或多种的运行机制和体系架构经验,精通Orcale语句，熟悉数据库的备份恢复及数据迁移等策略，熟练为数据库打补丁，版本升级等；</li>'+
                '<li>3、精通Linux系统，熟练各种命令；</li>'+
                '<li>4、熟悉分布式数据库设计和建设方案，海量数据库分库分表策略以及高并发OLTP 系统的设计和维护；</li>'+
                '<li>5、精通数据库产品性能分析和测试，对数据库的优化，存储性能有较深的研究和操作经验；</li>'+
                '<li>6、了解mogonDB,Redis cassandra 等NOSQL 的数据存储产品，熟悉不同类型和数据库的底层运行原理和优缺点；</li>'+
                '<li>7、熟练java、.net 一种或者多种开发语言、有过数据访问层设计的优先。</li>']
        },
        'position2':{//需求分析师
            'data_name':'需求分析师',
            'data_title':'负责指定产品的需求分析工作（需求深入挖掘、需求质量保障、系统分析、需求管理）；负责指定产品的......',
            'describe':['<li>1、负责指定产品的需求分析工作（需求深入挖掘、需求质量保障、系统分析、需求管理）；</li>'+
                '<li>2、负责指定产品的逻辑架构设计、功能需求、实施及改进工作；</li>'+
                '<li>3、参与需求调研和产品定义评估，业务需求讨论与设计；根据产品定义实现详细需求分析；与开发测试团队一起保证最终产品发版；</li>'+
                '<li>4、保障产品目标和产品需求的正确性、合理性、以及在各线条上准确一致的传递和实现。</li>'],
            'require':['<li>1、本科以上学历，计算机相关专业优先，有良好的技术背景；</li>'+
                '<li>2、3年以上软件行业系统或需求分析设计工作经验，有大项目或产品经验优先；</li>'+
                '<li>3、有移动端需求分析经验优先；</li>'+
                '<li>4、有较强的业务模型分析能力、沟通能力和文档编写能力，熟练使用ROSE等分析设计工具；有一定的项目管理能力；</li>'+
                '<li>5、有良好的产品架构设计、需求分析或系统架构设计理论基础，参加过架构设计或需求分析类培训优先；</li>'+
                '<li>6、熟悉RUP、UML和相关CASE进行业务分析建模，掌握OOAD分析设计方法，熟悉各种分析、设计文档的格式和编制要求优先；</li>'+
                '<li>7、具备良好的表达、沟通、领悟、归纳、逻辑推理和良好的学习理解能力；</li>'+
                '<li>8、有强烈的责任心和良好的团队合作精神，能够承担工作压力，做事积极、主动；</li>'+
                '<li>9、掌握Rational Rose、Power Designer、Visio等常用分析设计工具。</li>']
        },
        'position3':{//项目经理
            'data_name':'项目经理',
            'data_title':'负责指定产品的需求分析工作（需求深入挖掘、需求质量保障、系统分析、需求管理）；负责指定产品的......',
            'describe':['<li>1、负责项目研发与实施全过程管理；项目规划与协调，任务评估、资源管理及技术风险控制；</li>'+
            '<li>2、熟悉任务系统分析、架构设计、代码编写、文档编写整个过程；</li>'+
            '<li>3、编制项目开发计划；识别和控制项目风险；有效控制项目开发进程；</li>'+
            '<li>4、负责内部项目管理及与外部客户沟通，有效解决项目开发过程中遇到的质量问题和管理问题。</li>'],
            'require':['<li>1、计算机相关专业，本科以上学历；</li>'+
            '<li>2、具有3年以上软件项目的开发管理经验，具备良好的系统分析和设计能力；</li>'+
            '<li>3、熟练Java开发语言、熟悉Oracle等数据库，对数据库结构有较为深入的了解；</li>'+
            '<li>4、了解项目相关的开发、测试、实施等流程和文档标准；熟悉项目相关开发工具和管理工具的使用；</li>'+
            '<li>5、具备良好的学习、组织、协调和沟通能力，能够承受较大的工作压力，有较强的责任心和团队意识。</li>']
        },
        'position4':{//技术总监
            'data_name':'技术总监',
            'data_title':'负责系统技术架构、项目开发管理的最高决策者，对公司整体技术平台负责；负责网站及技术团队......',
            'describe':['<li>1、负责系统技术架构、项目开发管理的最高决策者，对公司整体技术平台负责；</li>'+
            '<li>2、负责网站及技术团队（开发、测试、产品、运维、现场支持）的规划、组建、管理；</li>'+
            '<li>3、负责公司的技术方向、技术规划与运筹实施，为公司业务发展提供全面的技术保障；</li>'+
            '<li>4、负责对技术方案的评审，各类技术安全问题工作；</li>'+
            '<li>5、公司的技术团队的梯队化建设及管理，包括人员的培养、业绩评估和激励等；</li>'+
            '<li>6、负责组织并指导研发人员在整体架构下开展产品设计、系统研发、上线前的测试工作，协调项目开发或实施的各个环节，把握项目的整体进度；</li>'+
            '<li>7、负责组织并指导运维人员按要求确保系统的正常运营、信息的综合利用及系统的安全性；</li>'+
            '<li>8、进行公司技术团队的梯队建设及管理，包括专业培训、技术指导、职业化培养、业绩评估和激励，全面提升团队的技术水平。</li>'],
            'require':['<li>1、本科及以上学历，8年以上电商互联网研发经验；</li>'+
            '<li>2、具有10年以上丰富的项目管理、产品研发、运维管理及大型项目团队管理经验；</li>'+
            '<li>3、具有主持大型互联网系统开发、运维管理的成功案例，以及数据迁移的成功案例。精通大型网站系统的架构设计、系统分析、软件实现、性能优化、系统安全等；</li>'+
            '<li>4、具有良好的软件工程意识，深刻理解软件系统架构，精通面向对象分析设计方法，熟练掌握设计系统的构架及完整解决方案；</li>'+
            '<li>5、掌握、NET、Java/J2EE、设计模式、SpingMVC、Mybatis、Spring、Ajax、Webservice、MQ、JMS、JMX、AOP、Junit等框架和技术的设计思想和实现方式；</li>'+
            '<li>6、具有数据库(Orcale编程、索引优化、查询优化和存储优化经验、静态化设计方面的经验。</li>']
        },
        'position5':{//系统架构师
            'data_name':'系统架构师',
            'data_title':'负责制定和调整项目的整体系统架构、开发计划、服务器架构；负责代码的设计、审核和检查，对项目......',
            'describe':['<li>1、负责制定和调整项目的整体系统架构、开发计划、服务器架构；</li>'+
            '<li>2、负责代码的设计、审核和检查，对项目的开发效率、代码执行效率、系统架构的安全稳定负责；</li>'+
            '<li>3、编写核心代码，并解决开发中遇到的技术难点问题；</li>'+
            '<li>4、组织并指导开发人员在整体架构下进行系统的研发、测试。</li>'],
            'require':['<li>1、计算机及相关专业大专以上学历，3年以上系统架构设计相关工作经验；</li>'+
            '<li>2、精通J2EE体系架构，精通各种java开源框架；</li>'+
            '<li>3、熟悉分布式、SOA、缓存技术、并发控制，并具有1个以上的大型应用和多系统组网集成的经验；</li>'+
            '<li>4、熟练使用各种开发方法进行系统开发，并具有规范的开发、设计文档写作能力；</li>'+
            '<li>5、精通MySQL、Orcale等常用数据库，具有很强数据库设计管理经验和SQL功底；</li>'+
            '<li>6、有团队管理经验，逻辑思路清晰，较强的创新能力，有良好的计划和执行能力。</li>']
        },
        'position6':{//PMO专员
            'data_name':'PMO专员',
            'data_title':'负责对部门内部项目进行支持、监控和管理，协助部门负责人实现项目目标；支撑PMO体系执行和改进......',
            'describe':['<li>1、 负责对部门内部项目进行支持、监控和管理，协助部门负责人实现项目目标；</li>'+
            '<li>2、 支撑PMO体系执行和改进，关注项目过程执行，识别、推进部门内部过程改善；</li>'+
            '<li>3、 对部门项目进行管理、监控和汇报，帮助协调、解决项目问题，保证项目顺利完成；</li>'+
            '<li>4、 支持体系流程，支持工具使用，参与流程和工具改进；</li>'+
            '<li>5、 组织部门级项目立项/结项/外包合同/变更评审；</li>'+
            '<li>6、 对项目数据进行汇总和管理，定期上报，为领导决策提供数据支持。</li>'],
            'require':['<li>1、 本科及以上学历，信息、计算机相关专业优先， 1年以上PMO项目管理相关工作经验；</li>'+
            '<li>2、 具备良好的项目管理软件应用能力和各类报告处理能力，会使用Excel、PowerPoint、Visio project等office组件；</li>'+
            '<li>3、 学习能力强，逻辑性和条理性较强，善于思考和分析问题，精通数据统计分析者优先考虑；</li>'+
            '<li>4、 具备良好的沟通协调能力和团队合作精神，工作积极主动；</li>'+
            '<li>获得PMP认证者优先考虑。</li>']
        },
        'position7':{//PMO经理
            'data_name':'PMO经理',
            'data_title':'负责PMO管理制度与运行机制建立与完善，负责项目资源池顾问日常管理；建立项目规范与......',
            'describe':['<li>1、负责PMO管理制度与运行机制建立与完善，负责项目资源池顾问日常管理；</li>'+
            '<li>2、建立项目规范与项目管理标准，在公司内部推行项目模版，做到项目管理规范化、一致性；</li>'+
            '<li>3、持续跟踪项目，关注项目过程及交付品，揭示项目管理存在的风险并督促项目经理采取应对措施；</li>'+
            '<li>4、参与各项目管理的过程，按照信息化建设与管理节奏，定期组织重点项目评审与评估会；</li>'+
            '<li>5、收集信息化重点项目进展及成效情况，定期进行总结与汇编，在公司及IT内部进行宣贯。</li>'],
            'require':['<li>1、年龄：40岁以下</li>'+
            '<li>2、学历：本科</li>'+
            '<li>3、专业： 计算机应用及相关专业</li>'+
            '<li>4、其它：PMP证书；精通PPT工作</li>'+
            '<li>经验/能力/个性特质描述：</li>'+
            '<li>1、有较强的企业战略理解能力；</li>'+
            '<li>2、熟悉项目管理方法，并有大型集团企业PMO工作经验；</li>'+
            '<li>3、有较强的沟通、协调、组织、计划能力；</li>'+
            '<li>4、有较强的语言文字组织和表达能力。</li>']
        },
        'position8':{//数据库工程师
            'data_name':'数据库工程师',
            'data_title':'根据业务需求，合理规划并安装数据库；制定数据库备份，恢复，灾备方案......',
            'describe':['<li>1、根据业务需求，合理规划并安装数据库；</li>'+
            '<li>2、制定数据库备份，恢复，灾备方案，并予以演练；</li>'+
            '<li>3、负责数据库日常监控及性能调优；</li>'+
            '<li>4、合理规划数据库，满足业务扩展及可靠性；</li>'+
            '<li>5、配合业务部门，处理并解决数据异常；</li>'+
            '<li>6、提供数据库运行统计及改善报告。</li>'],
            'require':['<li>1、大学本科以上学历，计算机相关专业；</li>'+
            '<li>2、5年以上IT行业工作经验，3年以上数据库管理员工作经验；</li>'+
            '<li>3、熟悉Oracle，SQL Server主流数据库的管理，OCP优先；</li>'+
            '<li>4、精通SQL语句，能够熟练编写存储过程、触发器等；</li>'+
            '<li>5、熟悉Oracle高可用性配置；</li>'+
            '<li>6、能够进行对SQL 进行优化及性能提升。</li>']
        },
        'position9':{//HTML5移动开发工程师
            'data_name':'HTML5移动开发工程师',
            'data_title':'根据产品设计文档和视觉文件，利用HTML5相关技术开发移动平台的web前端页面;掌握......',
            'describe':['<li>1、根据产品设计文档和视觉文件，利用HTML5相关技术开发移动平台的web前端页面；</li>'+
            '<li>2、掌握移动端html5页面的手势、动画；</li>'+
            '<li>3、持续的优化前端体验和页面响应速度，并保证兼容性和执行效率；</li>'+
            '<li>4、配合其他工程师一起研讨技术实现方案，进行应用及系统整合；</li>'+
            '<li>5、抗压能力强，有责任心，有良好的沟通表达能力和团队合作精神；</li>'+
            '<li>6、有强烈的求知欲，对互联网新技术有热情，自学能力强。</li>'],
            'require':['<li>1、大专以上学历，计算机等相关专业毕业；</li>'+
            '<li>2、熟悉html5、css3的新功能，熟悉C/C++ 、JavaScript 掌握，HTML,CSS,DOM JSON,AJAX等技术；</li>'+
            '<li>3、至少拥有2年以上基于HTML5技术的移动端APP相关项目的开发经验；</li>'+
            '<li>4、熟悉JS/JQuery Mobile、Sencha Touch、Appcelerator、PhoneGap等跨平台移动应用中间件框架；</li>'+
            '<li>5、思路清晰，善于思考，能独立分析和解决问题；</li>'+
            '<li>6、责任心强，具备良好的团队合作精神和承受压力的能力。</li>']
        },
        'position10':{//JAVA开发工程师
            'data_name':'JAVA开发工程师',
            'data_title':'1、根据开发流程进行设计，开发，测试，交付以满足需求；确保代码和文档的高质高量......',
            'describe':['<li>1、根据开发流程进行设计，开发，测试，交付以满足需求；</li>'+
            '<li>2、确保代码和文档的高质高量，关注软件的性能；</li>'+
            '<li>3、项目运营过程中的维护、优化、升级；</li>'+
            '<li>4、指导初级开发人员开发工作。</li>'],
            'require':['<li>1、计算机软件或相关专业大专以上学历，具备2年JAVA项目开发工作经验；</li>'+
            '<li>2、熟悉J2EE技术，熟悉各种开源的框架如Struts、Spring、Hibernate等；</li>'+
            '<li>3、熟悉ORACLE，了解存储过程；</li>'+
            '<li>4、熟悉tomcat、weblogic等常用容器的部署和性能调试 ；</li>'+
            '<li>5、了解Bootstrap、Jquery、CSS等网页的开发经验；</li>'+
            '<li>6、熟悉技术文档的编写，具备良好的文档编制习惯和代码书写规范；</li>'+
            '<li>7、思路清晰，善于思考，能独立分析和解决问题；</li>'+
            '<li>8、责任心强，具备良好的团队合作精神和承受压力的能力。</li>']
        },
        'position11':{//测试工程师
            'data_name':'测试工程师',
            'data_title':'根据软件需求制定测试计划、测试方案，设计测试数据和测试用例；执行测试任务，编写......',
            'describe':['<li>1、 根据软件需求制定测试计划、测试方案，设计测试数据和测试用例；</li>'+
            '<li>2、 执行测试任务，编写标准的测试文档如测试报告、测试结果分析报告等；</li>'+
            '<li>3、 完成软件的系统测试，对产品软件功能、稳定性、性能进行针对性的测试；</li>'+
            '<li>4、 对测试中发现的问题及时的跟踪和反馈，协助开发人员分析和解决问题；</li>'+
            '<li>5、 开发并维护自动化测试脚本；</li>'+
            '<li>6、 完善并规范测试流程。</li>'],
            'require':['<li>1、 专科以上学历， 计算机相关专业， 2年以上软件测试工作经验；</li>'+
            '<li>2、 熟悉软件测试的整体流程，熟练制定测试计划和测试用例，熟悉常用测试方法及技巧；</li>'+
            '<li>3、 能熟练使用性能测试工具（如Loadrunner、Bugfree、JMeter等）进行测试；</li>'+
            '<li>4、 熟悉至少一种数据库，熟练进行基本sql操作；</li>'+
            '<li>5、 熟练使用自动化测试工具，有搭建自动化测试框架能力者优先；</li>'+
            '<li>6、 具备很强的学习能力、沟通能力，善于团队合作；</li>'+
            '<li>7、 具有良好的普通话、广东话、英文语言阅读和书写能力。</li>']
        }
    };
    var guangzhou = {
        'position2':{//数据分析员
            'data_name':'数据分析员',
            'data_title':'负责公司各部门数据处理、分析需求，为公司决策提供数据处理和信息分析的支持；制定各种数据表格......',
            'describe':['<li>1、负责公司各部门数据处理、分析需求，为公司决策提供数据处理和信息分析的支持；</li>'+
                '<li>2、制定各种数据表格，并对各项数据进行分析整理及各种数据的汇总工作，核对相关数据，定期总结并制作分析报告；</li>'+
                '<li>3、对数据敏感，善于发现数据的变化规律，挖掘数据进行深层次的分析；</li>'+
                '<li>4、完成上级交办的其他工作。</li>'],
            'require':['<li>1、相关专业专科及以上学历；</li>'+
                '<li>2、有统计或医药类专业背景；</li>'+
                '<li>3、注重细节，对数字敏感，逻辑性强，擅长数据分析、分析和解决问题；</li>'+
                '<li>4、具备海量数据处理能力，擅用Excel函数功能，熟悉MYSQL查询，懂SAP软件的优先；</li>'+
                '<li>5、良好的沟通和团队协助能力，同时要具备很强的责任心。</li>']
        }
    };
    var shanghai = {
        'position2':{//系统工程师
            'data_name':'系统工程师',
            'data_title':'负责网络和服务器的管理，以及系统相关软件管理；负责系统日常的监控及数据备份工作，监督并促使......',
            'describe':['<li>1、负责网络和服务器的管理，以及系统相关软件管理；</li>'+
                '<li>2、负责系统日常的监控及数据备份工作，监督并促使系统的有效、正常运行；</li>'+
                '<li>3、具备网络及网络安全知识；</li>'+
                '<li>4、项目实施工作，包括调试、初始化及用户培训等工作；</li>'+
                '<li>5、具备良好的学习能力和解决问题能力。'],
            'require':''
        }
    };

    var imgIndex = [2,1,1,2,2,1,1,2,2,1,1,2];
    var j = 0;
    var liStr = '';
    for(var i in shenzheng){
        var _this = shenzheng;
        liStr += '<li class="fix">'+
            '<div class="left"><img src="images/rec_head'+imgIndex[j]+'.png" alt=""/></div>'+
            '<div class="right"><p class="p1">招聘职位：'+_this[i].data_name+'</p>'+
            '<p class="p2">任职要求：</p>'+
            '<p class="p3">'+_this[i].data_title+'</p>'+
            '<p class="p4"><a href="javascript:;" data_name="'+_this[i].data_name+'">查看更多</a></p></div></li>';
        j++;
    }

    $('.ww_job').append(liStr);
    /*城市切换*/
    $('.ww_city').find('a').on('click',function(e){
        e.stopPropagation();
        liStr = '';
        j = 0;
        $('.ww_city').find('li').removeClass('hover');
        $(this).parent('li').addClass('hover');
        if($(this).html()=='深圳'){
            for(var i in shenzheng){
                var _this = shenzheng;
                liStr += '<li class="fix">'+
                    '<div class="left"><img src="images/rec_head'+imgIndex[j]+'.png" alt=""/></div>'+
                    '<div class="right"><p class="p1">招聘职位：'+_this[i].data_name+'</p>'+
                    '<p class="p2">任职要求：</p>'+
                    '<p class="p3">'+_this[i].data_title+'</p>'+
                    '<p class="p4"><a href="javascript:;" data_name="'+_this[i].data_name+'">查看更多</a></p></div></li>';
                j++;
            }
        }
        if($(this).html()=='广州'){
            for(var i in guangzhou){
                var _this = guangzhou;
                liStr += '<li class="fix">'+
                    '<div class="left"><img src="images/rec_head'+imgIndex[j]+'.png" alt=""/></div>'+
                    '<div class="right"><p class="p1">招聘职位：'+_this[i].data_name+'</p>'+
                    '<p class="p2">任职要求：</p>'+
                    '<p class="p3">'+_this[i].data_title+'</p>'+
                    '<p class="p4"><a href="javascript:;" data_name="'+_this[i].data_name+'">查看更多</a></p></div></li>';
                j++;
            }
        }
        if($(this).html()=='上海'){
            for(var i in shanghai){
                var _this = shanghai;
                liStr += '<li class="fix">'+
                    '<div class="left"><img src="images/rec_head'+imgIndex[j]+'.png" alt=""/></div>'+
                    '<div class="right"><p class="p1">招聘职位：'+_this[i].data_name+'</p>'+
                    '<p class="p2">任职要求：</p>'+
                    '<p class="p3">'+_this[i].data_title+'</p>'+
                    '<p class="p4"><a href="javascript:;" data_name="'+_this[i].data_name+'">查看更多</a></p></div></li>';
                j++;
            }
        }
        $('.ww_job').html('');
        $('.ww_job').append(liStr);
    });

    /*查看更多<--弹出层显示-->*/
    $('.ww_job').delegate('a','click',function(e){
        e.stopPropagation();
        var dataName = $(this).attr('data_name');
        for(var i in shenzheng){
            if(dataName==shenzheng[i].data_name){
                var str = ' <div class="ww_tip">' +
                    '<div class="top"><p class="p1">招聘职位：'+shenzheng[i].data_name+'</p><span class="close"><a href="javascript:;" id="close_btn"></a></span></div>' +
                    '<div class="info"><p class="p1">职位描述</p><ul>' + shenzheng[i].describe+'</ul><p class="p1">职位要求</p>' +
                    '<ul>' + shenzheng[i].require+'</ul></div>' +
                    '<div class="tip_bottom"><ul class="fix">' +
                    '<li class="li1 fix"><span class="span1 email"></span><span>简历请投至HR邮箱 : job@Winwayworld.com</span></li>' +
                    '<li class="li2 fix"><span class="span1 phone"></span><span>联系电话 : 0755-86968393</span></li></ul></div></div>';
            }
        }
        for(var i in shanghai){
            if(dataName==shanghai[i].data_name){
                var str = ' <div class="ww_tip">' +
                    '<div class="top"><p class="p1">招聘职位：'+shanghai[i].data_name+'</p><span class="close"><a href="javascript:;" id="close_btn"></a></span></div>' +
                    '<div class="info"><p class="p1">职位描述</p><ul>' + shanghai[i].describe+'</ul><p class="p1">职位要求</p>' +
                    '<ul>' + shanghai[i].require+'</ul></div>' +
                    '<div class="tip_bottom"><ul class="fix">' +
                    '<li class="li1 fix"><span class="span1 email"></span><span>简历请投至HR邮箱 : job@Winwayworld.com</span></li>' +
                    '<li class="li2 fix"><span class="span1 phone"></span><span>联系电话 : 0755-86968393</span></li></ul></div></div>';
            }
        }
        for(var i in guangzhou){
            if(dataName==guangzhou[i].data_name){
                var str = ' <div class="ww_tip">' +
                    '<div class="top"><p class="p1">招聘职位：'+guangzhou[i].data_name+'</p><span class="close"><a href="javascript:;" id="close_btn"></a></span></div>' +
                    '<div class="info"><p class="p1">职位描述</p><ul>' + guangzhou[i].describe+'</ul><p class="p1">职位要求</p>' +
                    '<ul>' + guangzhou[i].require+'</ul></div>' +
                    '<div class="tip_bottom"><ul class="fix">' +
                    '<li class="li1 fix"><span class="span1 email"></span><span>简历请投至HR邮箱 : job@Winwayworld.com</span></li>' +
                    '<li class="li2 fix"><span class="span1 phone"></span><span>联系电话 : 0755-86968393</span></li></ul></div></div>';
            }
        }

        //页面层-自定义
        layer.open({
            type: 1,
            title: false,
            closeBtn: false,
            shadeClose: true,
            content: str,
            area: '800px',
            shade: [0.5, '#000']
        });
    });
    /*关闭弹出层*/
    $(document).delegate('#close_btn','click',function(e){
       e.stopPropagation();
        layer.closeAll();
    });

    $('#vision').find('a').on('click',function(){
            scrollcontent($('#ww_position'));
    });

    function scrollcontent(obj){
        obj.velocity("scroll", 800);
    };

    function getParameter(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
});