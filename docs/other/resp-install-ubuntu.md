# 树莓派 4B 安装 Ubuntu22.04

树莓派 4B 安装 Ubuntu22.04 教程，不需要显示器，需要树莓派和电脑连接到同一个局域网。

## 制作镜像

1. 打开镜像网站[北大镜像网站](https://mirrors.pku.edu.cn/ubuntu-cdimage/releases/22.04/release/)。
2. 我这里选择了服务器版本 `ubuntu-22.04-preinstalled-server-arm64+raspi.img.xz`
3. 解压
4. 下载制作镜像工具[rufus](https://rufus.ie/zh/)。
5. 插入 SD 卡，启动 rufus，点击“设备”选择 SD 卡，点击“选择”按钮选择刚解压的镜像，点击“开始”制作镜像。
6. 此时系统识别不到 SD 卡，拔卡重新插入，右击此电脑，打开管理，“磁盘管理”中到 system-boot，右击选择“添加驱动和更改路径”，添加一个盘，此时就可以识别到 SD 卡。
7. 打卡 SD 卡，找到 network-config 文件，添加下面的配置
   ```bash
   wifis:
   wlan0:
     dhcp4: true
     optional: true
     access-points:
       wifi名称:
         password: "密码"
   ```

到这里树莓派镜像制作完毕，插入 SD 卡开机树莓派时，会自动连接到我们配置的 WIFI 网络。

## 安装系统

树莓派连接到查看
