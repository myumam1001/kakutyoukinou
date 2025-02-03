OLED12864_I2C.init(60)
//% color=190 weight=100 icon="\uf06b" block="自作拡張機能OLED表示超音波センサー"
namespace 自作拡張機能OLED表示超音波センサー {
    OLED12864_I2C.init(60)
    //% block
    export function 超音波センサーの値をoledに表示するtはｐ１eはｐ２ () {
        OLED12864_I2C.showNumber(0, 0, sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.MicroSeconds), 1)
    }
    
}
