<?php

/**
 * Zend Framework (http://framework.zend.com/)
 *
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2013 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Application\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use Zend\View\Model\JsonModel;

class demoController extends AbstractActionController {

  public function indexAction() {
    return new ViewModel();
  }

  public function viewsetAction() {
  	
	  $renderer = $this->serviceLocator->get('Zend\View\Renderer\RendererInterface');
    $baseurl = $renderer->basePath();
    $ret = new JsonModel(            );
    $ret->setVariables(
            array(
              'html' => "<img src='" . $baseurl . "/img/Chrysanthemumb.jpg'/>",
           
            )
    );

    return $ret;
	 
	 
  }

}
