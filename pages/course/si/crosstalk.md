# Crosstalk

## 思考题

### 从 $N$ 节集总模型分析近端串扰和远端串扰

### 近端/远端串扰幅度分别与那些参数有关

### 列出减小串扰的 6 种方法，并说明原理

1. 增加信号路径之间的距离<br/>
   将信号路径与其他路径拉远减少了互容互感，使边缘场减小到能接受的水平，是解决耦合和串扰的最根本解决方法
1. 减小耦合长度<br/>
   减小耦合长度可减小近端串扰持续时间，同时也可减小近端串扰和远端串扰的幅值
1. 在线间使用防护布线<br/>
   正确使用防护布线可以使其吸收边缘场，保护外侧的其他信号线
1. 将敏感线布成带状线<br/>
   带状线周围介质均匀，不会产生远端串扰
1. 在封装和连接件中不使用公共返回引脚<br/>
   共用返回路径导致回路重叠，增大耦合，串扰很强
1. 将信号线布在有不同返回平面的不同层上<br/>
   分层并用不同平面做返回路径可以减小边缘场，降低与其它信号线的串扰

1 + 2 + 4 + 在表面层导体上方加介质材料 = 减少远端串扰
